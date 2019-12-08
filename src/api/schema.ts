import { makeExecutableSchema } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';

import {
  createArticleResolver,
  getArticleAuthorResolver,
  getArticleResolver,
  listArticlesResolver,
  updateArticleResolver,
  deleteArticleResolver,
} from './resolvers/articles.resolvers';
import {
  currentUserResolver,
  getCurrentUserWrittenArticlesResolver,
  getUserResolver,
  getUserWrittenArticlesResolver,
  loginResolver,
  registerResolver,
  adminUpdateUserResolver,
} from './resolvers/users.resolvers';
import { APIResolvers } from './schema/types';
import { APIContext } from './server';
import { createDomainResolver, updateDomainResolver, getDomainByKeyResolver } from './resolvers/domains.resolvers';

export const typeDefs = importSchema('./src/api/schema/schema.graphql');

const resolvers: APIResolvers<APIContext> = {
  Mutation: {
    login: loginResolver,
    register: registerResolver,
    adminUpdateUser: adminUpdateUserResolver,
    updateArticle: updateArticleResolver,
    createArticle: createArticleResolver,
    deleteArticle: deleteArticleResolver,
    createDomain: createDomainResolver,
    updateDomain: updateDomainResolver,
  },
  Query: {
    currentUser: currentUserResolver,
    getArticle: getArticleResolver,
    listArticles: listArticlesResolver,
    getUser: getUserResolver,
    getDomainByKey: getDomainByKeyResolver,
  },
  Article: {
    author: getArticleAuthorResolver,
  },
  User: {
    articles: getUserWrittenArticlesResolver,
  },
  CurrentUser: {
    articles: getCurrentUserWrittenArticlesResolver,
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
