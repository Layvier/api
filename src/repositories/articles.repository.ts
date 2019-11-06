import { db } from '../infra/database';
import { generate } from 'shortid';
import { ArticleNotFoundError } from '../errors/NotFoundError';

const articleCollection = db.get<Article>('articles');

export enum ArticleContentType {
  Markdown = 'markdown',
}

export interface Article {
  _id: string;
  key: string;
  contentType: ArticleContentType;
  title: string;
  content: string;
  authorId: string;
}

export interface CreateArticleData {
  contentType: ArticleContentType;
  title: string;
  content: string;
  authorId: string;
}

export interface UpdateArticleData {
  title?: string;
  content?: string;
}

const generateKey = generate;

export const createArticle = async (data: CreateArticleData): Promise<Article> => {
  const createdArticle = await articleCollection.insert({
    ...data,
    key: generateKey(),
  });
  return createdArticle;
};

export const findArticles = async (
  filter: { authorId?: string },
  pagination?: { offset?: number; limit?: number }
): Promise<Article[]> => {
  return await articleCollection.find(
    {
      ...(!!filter.authorId && { authorId: filter.authorId }),
    },
    { limit: (pagination && pagination.limit) || 5, skip: (pagination && pagination.offset) || 0 }
  );
};

export const findArticleById = async (id: string): Promise<Article | null> => {
  const article = await articleCollection.findOne(id);

  if (!article) return null;

  return article;
};

export const findArticleByKey = async (key: string): Promise<Article | null> => {
  const article = await articleCollection.findOne({ key });

  if (!article) return null;

  return article;
};

export const updateArticle = async (id: string, data: UpdateArticleData): Promise<Article> => {
  const updatedArticle = await articleCollection.findOneAndUpdate(id, {
    $set: data,
  });

  if (!updatedArticle) throw new ArticleNotFoundError(id, 'id');

  return updatedArticle;
};
