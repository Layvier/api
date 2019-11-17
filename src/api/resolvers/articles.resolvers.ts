import { ArticleNotFoundError, NotFoundError } from '../../errors/NotFoundError';
import {
  Article,
  findArticleByKey,
  findArticles,
  updateArticleWrittenBy,
  writeArticle,
  getArticleAuthor,
} from '../../repositories/articles.repository';
import { UnauthenticatedError } from '../errors/UnauthenticatedError';
import { APIArticle, APIMutationResolvers, APIQueryResolvers, APIArticleResolvers } from '../schema/types';
import { nullToUndefined } from '../util/nullToUndefined';
import { toAPIUser } from './users.resolvers';

export function toAPIArticle(article: Article): APIArticle {
  return article;
}

export const createArticleResolver: APIMutationResolvers['createArticle'] = async (_parent, { payload }, ctx) => {
  if (!ctx.user) throw new UnauthenticatedError('Must be logged in to create an article');

  return toAPIArticle(await writeArticle({ _id: ctx.user._id }, payload));
};

export const listArticlesResolver: APIQueryResolvers['listArticles'] = async (_, { options }) => {
  const { filter, pagination } = nullToUndefined(options);
  const articles = await findArticles(filter || {}, pagination);
  return { items: articles.map(toAPIArticle) };
};

export const getArticleResolver: APIQueryResolvers['getArticle'] = async (_parent, { key }, ctx) => {
  const article = await findArticleByKey(key);

  if (!article) throw new ArticleNotFoundError(key, 'key');

  return toAPIArticle(article);
};

export const updateArticleResolver: APIMutationResolvers['updateArticle'] = async (_parent, { id, payload }, ctx) => {
  if (!ctx.user) throw new UnauthenticatedError('Must be logged in to create an article');

  const updatedArticle = await updateArticleWrittenBy({ _id: ctx.user._id }, { _id: id }, nullToUndefined(payload));

  return toAPIArticle(updatedArticle);
};

export const getArticleAuthorResolver: APIArticleResolvers['author'] = async article => {
  const author = await getArticleAuthor({ _id: article._id });

  return toAPIUser(author);
};
