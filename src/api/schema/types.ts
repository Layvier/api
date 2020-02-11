import { ArticleContentType } from '../../entities/Article';
import { UserRole } from '../../entities/User';
import { ResourceType } from '../../entities/Resource';
import { ResourceMediaType } from '../../entities/Resource';
import { GraphQLResolveInfo } from 'graphql';
import { APIContext } from '../server';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type APIAdminUpdateUserPayload = {
  displayName?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
};

export type APIArticle = {
   __typename?: 'Article',
  _id: Scalars['String'],
  key: Scalars['String'],
  contentType: ArticleContentType,
  title: Scalars['String'],
  content: Scalars['String'],
  author?: Maybe<APIUser>,
};

export { ArticleContentType };

export type APIConcept = {
   __typename?: 'Concept',
  _id: Scalars['String'],
  key: Scalars['String'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  domain?: Maybe<APIDomain>,
  coveredByResources?: Maybe<APIConceptCoveredByResourcesResults>,
  known?: Maybe<APIKnownConcept>,
};


export type APIConceptCoveredByResourcesArgs = {
  options: APIConceptCoveredByResourcesOptions
};

export type APIConceptCoveredByResourcesOptions = {
  pagination?: Maybe<APIPaginationOptions>,
};

export type APIConceptCoveredByResourcesResults = {
   __typename?: 'ConceptCoveredByResourcesResults',
  items: Array<APIResource>,
};

export type APICreateArticlePayload = {
  contentType: ArticleContentType,
  title: Scalars['String'],
  content: Scalars['String'],
};

export type APICreateConceptPayload = {
  key?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type APICreateDomainPayload = {
  name: Scalars['String'],
  key: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type APICreateResourcePayload = {
  name: Scalars['String'],
  type: ResourceType,
  mediaType: ResourceMediaType,
  url: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  durationMn?: Maybe<Scalars['Int']>,
  tags?: Maybe<Array<Scalars['String']>>,
};

export type APICurrentUser = {
   __typename?: 'CurrentUser',
  _id: Scalars['String'],
  email: Scalars['String'],
  displayName: Scalars['String'],
  key: Scalars['String'],
  role: UserRole,
  articles?: Maybe<APIListArticlesResult>,
};


export type APICurrentUserArticlesArgs = {
  options: APIListArticlesOptions
};

export type APIDeleteArticleResponse = {
   __typename?: 'DeleteArticleResponse',
  _id: Scalars['String'],
  success: Scalars['Boolean'],
};

export type APIDeleteConceptResult = {
   __typename?: 'DeleteConceptResult',
  success: Scalars['Boolean'],
  _id: Scalars['String'],
};

export type APIDeleteDomainResponse = {
   __typename?: 'DeleteDomainResponse',
  _id: Scalars['String'],
  success: Scalars['Boolean'],
};

export type APIDomain = {
   __typename?: 'Domain',
  _id: Scalars['String'],
  name: Scalars['String'],
  key: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  concepts?: Maybe<APIDomainConceptsResults>,
  resources?: Maybe<APIDomainResourcesResults>,
};


export type APIDomainConceptsArgs = {
  options: APIDomainConceptsOptions
};


export type APIDomainResourcesArgs = {
  options: APIDomainResourcesOptions
};

export type APIDomainConceptsOptions = {
  pagination?: Maybe<APIPaginationOptions>,
};

export type APIDomainConceptsResults = {
   __typename?: 'DomainConceptsResults',
  items: Array<APIConcept>,
};

export type APIDomainResourcesOptions = {
  pagination: APIPaginationOptions,
};

export type APIDomainResourcesResults = {
   __typename?: 'DomainResourcesResults',
  items: Array<APIResource>,
};

export type APIKnownConcept = {
   __typename?: 'KnownConcept',
  level: Scalars['Float'],
};

export type APIListArticlesFilter = {
  contentType?: Maybe<ArticleContentType>,
};

export type APIListArticlesOptions = {
  filter?: Maybe<APIListArticlesFilter>,
  pagination?: Maybe<APIPaginationOptions>,
};

export type APIListArticlesResult = {
   __typename?: 'ListArticlesResult',
  items: Array<APIArticle>,
};

export type APILoginResponse = {
   __typename?: 'LoginResponse',
  currentUser: APICurrentUser,
  jwt: Scalars['String'],
};

export type APIMutation = {
   __typename?: 'Mutation',
  createArticle: APIArticle,
  updateArticle: APIArticle,
  deleteArticle: APIDeleteArticleResponse,
  addConceptToDomain: APIConcept,
  updateConcept: APIConcept,
  deleteConcept: APIDeleteConceptResult,
  setConceptsKnown: Array<APIConcept>,
  setConceptsUnknown: Array<APIConcept>,
  createDomain: APIDomain,
  updateDomain: APIDomain,
  deleteDomain: APIDeleteDomainResponse,
  createResource: APIResource,
  updateResource: APIResource,
  addResourceToDomain: APIResource,
  attachResourceToDomain: APIResource,
  attachResourceCoversConcepts: APIResource,
  detachResourceCoversConcepts: APIResource,
  addTagsToResource: APIResource,
  removeTagsFromResource: APIResource,
  login: APILoginResponse,
  register: APICurrentUser,
  adminUpdateUser: APIUser,
};


export type APIMutationCreateArticleArgs = {
  payload: APICreateArticlePayload
};


export type APIMutationUpdateArticleArgs = {
  id: Scalars['String'],
  payload: APIUpdateArticlePayload
};


export type APIMutationDeleteArticleArgs = {
  id: Scalars['String']
};


export type APIMutationAddConceptToDomainArgs = {
  domainId: Scalars['String'],
  payload: APICreateConceptPayload
};


export type APIMutationUpdateConceptArgs = {
  _id: Scalars['String'],
  payload: APIUpdateConceptPayload
};


export type APIMutationDeleteConceptArgs = {
  _id: Scalars['String']
};


export type APIMutationSetConceptsKnownArgs = {
  payload: APISetConceptKnownPayload
};


export type APIMutationSetConceptsUnknownArgs = {
  conceptIds: Array<Scalars['String']>
};


export type APIMutationCreateDomainArgs = {
  payload: APICreateDomainPayload
};


export type APIMutationUpdateDomainArgs = {
  id: Scalars['String'],
  payload: APIUpdateDomainPayload
};


export type APIMutationDeleteDomainArgs = {
  id: Scalars['String']
};


export type APIMutationCreateResourceArgs = {
  payload: APICreateResourcePayload
};


export type APIMutationUpdateResourceArgs = {
  _id: Scalars['String'],
  payload: APIUpdateResourcePayload
};


export type APIMutationAddResourceToDomainArgs = {
  domainId: Scalars['String'],
  payload: APICreateResourcePayload
};


export type APIMutationAttachResourceToDomainArgs = {
  domainId: Scalars['String'],
  resourceId: Scalars['String']
};


export type APIMutationAttachResourceCoversConceptsArgs = {
  resourceId: Scalars['String'],
  conceptIds: Array<Scalars['String']>
};


export type APIMutationDetachResourceCoversConceptsArgs = {
  resourceId: Scalars['String'],
  conceptIds: Array<Scalars['String']>
};


export type APIMutationAddTagsToResourceArgs = {
  resourceId: Scalars['String'],
  tags: Array<Scalars['String']>
};


export type APIMutationRemoveTagsFromResourceArgs = {
  resourceId: Scalars['String'],
  tags: Array<Scalars['String']>
};


export type APIMutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type APIMutationRegisterArgs = {
  payload: APIRegisterPayload
};


export type APIMutationAdminUpdateUserArgs = {
  id: Scalars['String'],
  payload: APIAdminUpdateUserPayload
};

export type APIPaginationOptions = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
};

export type APIQuery = {
   __typename?: 'Query',
  getArticleByKey: APIArticle,
  listArticles: APIListArticlesResult,
  getConcept: APIConcept,
  getConceptByKey: APIConcept,
  searchDomains: APISearchDomainsResult,
  getDomainByKey: APIDomain,
  getResourceById: APIResource,
  searchResourceTags: Array<APIResourceTagSearchResult>,
  currentUser: APICurrentUser,
  getUser: APIUser,
};


export type APIQueryGetArticleByKeyArgs = {
  key: Scalars['String']
};


export type APIQueryListArticlesArgs = {
  options: APIListArticlesOptions
};


export type APIQueryGetConceptArgs = {
  _id: Scalars['String']
};


export type APIQueryGetConceptByKeyArgs = {
  key: Scalars['String']
};


export type APIQuerySearchDomainsArgs = {
  options: APISearchDomainsOptions
};


export type APIQueryGetDomainByKeyArgs = {
  key: Scalars['String']
};


export type APIQueryGetResourceByIdArgs = {
  id: Scalars['String']
};


export type APIQuerySearchResourceTagsArgs = {
  options: APISearchResourceTagsOptions
};


export type APIQueryGetUserArgs = {
  key: Scalars['String']
};

export type APIRegisterPayload = {
  displayName: Scalars['String'],
  key: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export type APIResource = {
   __typename?: 'Resource',
  _id: Scalars['String'],
  name: Scalars['String'],
  type: ResourceType,
  mediaType: ResourceMediaType,
  tags?: Maybe<Array<APIResourceTag>>,
  url: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  durationMn?: Maybe<Scalars['Int']>,
  coveredConcepts?: Maybe<APIResourceCoveredConceptsResults>,
  domains?: Maybe<APIResourceDomainsResults>,
};


export type APIResourceCoveredConceptsArgs = {
  options: APIResourceCoveredConceptsOptions
};


export type APIResourceDomainsArgs = {
  options: APIResourceDomainsOptions
};

export type APIResourceCoveredConceptsOptions = {
  pagination?: Maybe<APIPaginationOptions>,
};

export type APIResourceCoveredConceptsResults = {
   __typename?: 'ResourceCoveredConceptsResults',
  items: Array<APIConcept>,
};

export type APIResourceDomainsOptions = {
  pagination?: Maybe<APIPaginationOptions>,
};

export type APIResourceDomainsResults = {
   __typename?: 'ResourceDomainsResults',
  items: Array<APIDomain>,
};

export { ResourceMediaType };

export type APIResourceTag = {
   __typename?: 'ResourceTag',
  name: Scalars['String'],
};

export type APIResourceTagSearchResult = {
   __typename?: 'ResourceTagSearchResult',
  name: Scalars['String'],
  usageCount?: Maybe<Scalars['Int']>,
};

export { ResourceType };

export type APISearchDomainsOptions = {
  query?: Maybe<Scalars['String']>,
  pagination: APIPaginationOptions,
};

export type APISearchDomainsResult = {
   __typename?: 'SearchDomainsResult',
  items: Array<APIDomain>,
};

export type APISearchResourceTagsOptions = {
  query: Scalars['String'],
  pagination: APIPaginationOptions,
};

export type APISetConceptKnownPayload = {
  concepts: Array<APISetConceptKnownPayloadConceptsField>,
};

export type APISetConceptKnownPayloadConceptsField = {
  conceptId: Scalars['String'],
  level?: Maybe<Scalars['Float']>,
};

export type APIUpdateArticlePayload = {
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type APIUpdateConceptPayload = {
  key?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type APIUpdateDomainPayload = {
  name?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type APIUpdateResourcePayload = {
  name?: Maybe<Scalars['String']>,
  type?: Maybe<ResourceType>,
  mediaType?: Maybe<ResourceMediaType>,
  url?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  durationMn?: Maybe<Scalars['Int']>,
};

export type APIUser = {
   __typename?: 'User',
  _id: Scalars['String'],
  email: Scalars['String'],
  displayName: Scalars['String'],
  key: Scalars['String'],
  articles?: Maybe<APIListArticlesResult>,
};


export type APIUserArticlesArgs = {
  options: APIListArticlesOptions
};

export { UserRole };

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type APIResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Article: ResolverTypeWrapper<APIArticle>,
  ArticleContentType: ArticleContentType,
  User: ResolverTypeWrapper<APIUser>,
  ListArticlesOptions: APIListArticlesOptions,
  ListArticlesFilter: APIListArticlesFilter,
  PaginationOptions: APIPaginationOptions,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ListArticlesResult: ResolverTypeWrapper<APIListArticlesResult>,
  Concept: ResolverTypeWrapper<APIConcept>,
  Domain: ResolverTypeWrapper<APIDomain>,
  DomainConceptsOptions: APIDomainConceptsOptions,
  DomainConceptsResults: ResolverTypeWrapper<APIDomainConceptsResults>,
  DomainResourcesOptions: APIDomainResourcesOptions,
  DomainResourcesResults: ResolverTypeWrapper<APIDomainResourcesResults>,
  Resource: ResolverTypeWrapper<APIResource>,
  ResourceType: ResourceType,
  ResourceMediaType: ResourceMediaType,
  ResourceTag: ResolverTypeWrapper<APIResourceTag>,
  ResourceCoveredConceptsOptions: APIResourceCoveredConceptsOptions,
  ResourceCoveredConceptsResults: ResolverTypeWrapper<APIResourceCoveredConceptsResults>,
  ResourceDomainsOptions: APIResourceDomainsOptions,
  ResourceDomainsResults: ResolverTypeWrapper<APIResourceDomainsResults>,
  ConceptCoveredByResourcesOptions: APIConceptCoveredByResourcesOptions,
  ConceptCoveredByResourcesResults: ResolverTypeWrapper<APIConceptCoveredByResourcesResults>,
  KnownConcept: ResolverTypeWrapper<APIKnownConcept>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  SearchDomainsOptions: APISearchDomainsOptions,
  SearchDomainsResult: ResolverTypeWrapper<APISearchDomainsResult>,
  SearchResourceTagsOptions: APISearchResourceTagsOptions,
  ResourceTagSearchResult: ResolverTypeWrapper<APIResourceTagSearchResult>,
  CurrentUser: ResolverTypeWrapper<APICurrentUser>,
  UserRole: UserRole,
  Mutation: ResolverTypeWrapper<{}>,
  CreateArticlePayload: APICreateArticlePayload,
  UpdateArticlePayload: APIUpdateArticlePayload,
  DeleteArticleResponse: ResolverTypeWrapper<APIDeleteArticleResponse>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CreateConceptPayload: APICreateConceptPayload,
  UpdateConceptPayload: APIUpdateConceptPayload,
  DeleteConceptResult: ResolverTypeWrapper<APIDeleteConceptResult>,
  SetConceptKnownPayload: APISetConceptKnownPayload,
  SetConceptKnownPayloadConceptsField: APISetConceptKnownPayloadConceptsField,
  CreateDomainPayload: APICreateDomainPayload,
  UpdateDomainPayload: APIUpdateDomainPayload,
  DeleteDomainResponse: ResolverTypeWrapper<APIDeleteDomainResponse>,
  CreateResourcePayload: APICreateResourcePayload,
  UpdateResourcePayload: APIUpdateResourcePayload,
  LoginResponse: ResolverTypeWrapper<APILoginResponse>,
  RegisterPayload: APIRegisterPayload,
  AdminUpdateUserPayload: APIAdminUpdateUserPayload,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type APIResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  Article: APIArticle,
  ArticleContentType: ArticleContentType,
  User: APIUser,
  ListArticlesOptions: APIListArticlesOptions,
  ListArticlesFilter: APIListArticlesFilter,
  PaginationOptions: APIPaginationOptions,
  Int: Scalars['Int'],
  ListArticlesResult: APIListArticlesResult,
  Concept: APIConcept,
  Domain: APIDomain,
  DomainConceptsOptions: APIDomainConceptsOptions,
  DomainConceptsResults: APIDomainConceptsResults,
  DomainResourcesOptions: APIDomainResourcesOptions,
  DomainResourcesResults: APIDomainResourcesResults,
  Resource: APIResource,
  ResourceType: ResourceType,
  ResourceMediaType: ResourceMediaType,
  ResourceTag: APIResourceTag,
  ResourceCoveredConceptsOptions: APIResourceCoveredConceptsOptions,
  ResourceCoveredConceptsResults: APIResourceCoveredConceptsResults,
  ResourceDomainsOptions: APIResourceDomainsOptions,
  ResourceDomainsResults: APIResourceDomainsResults,
  ConceptCoveredByResourcesOptions: APIConceptCoveredByResourcesOptions,
  ConceptCoveredByResourcesResults: APIConceptCoveredByResourcesResults,
  KnownConcept: APIKnownConcept,
  Float: Scalars['Float'],
  SearchDomainsOptions: APISearchDomainsOptions,
  SearchDomainsResult: APISearchDomainsResult,
  SearchResourceTagsOptions: APISearchResourceTagsOptions,
  ResourceTagSearchResult: APIResourceTagSearchResult,
  CurrentUser: APICurrentUser,
  UserRole: UserRole,
  Mutation: {},
  CreateArticlePayload: APICreateArticlePayload,
  UpdateArticlePayload: APIUpdateArticlePayload,
  DeleteArticleResponse: APIDeleteArticleResponse,
  Boolean: Scalars['Boolean'],
  CreateConceptPayload: APICreateConceptPayload,
  UpdateConceptPayload: APIUpdateConceptPayload,
  DeleteConceptResult: APIDeleteConceptResult,
  SetConceptKnownPayload: APISetConceptKnownPayload,
  SetConceptKnownPayloadConceptsField: APISetConceptKnownPayloadConceptsField,
  CreateDomainPayload: APICreateDomainPayload,
  UpdateDomainPayload: APIUpdateDomainPayload,
  DeleteDomainResponse: APIDeleteDomainResponse,
  CreateResourcePayload: APICreateResourcePayload,
  UpdateResourcePayload: APIUpdateResourcePayload,
  LoginResponse: APILoginResponse,
  RegisterPayload: APIRegisterPayload,
  AdminUpdateUserPayload: APIAdminUpdateUserPayload,
}>;

export type APIArticleResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['Article'] = APIResolversParentTypes['Article']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  contentType?: Resolver<APIResolversTypes['ArticleContentType'], ParentType, ContextType>,
  title?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  content?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  author?: Resolver<Maybe<APIResolversTypes['User']>, ParentType, ContextType>,
}>;

export type APIConceptResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['Concept'] = APIResolversParentTypes['Concept']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<APIResolversTypes['String']>, ParentType, ContextType>,
  domain?: Resolver<Maybe<APIResolversTypes['Domain']>, ParentType, ContextType>,
  coveredByResources?: Resolver<Maybe<APIResolversTypes['ConceptCoveredByResourcesResults']>, ParentType, ContextType, RequireFields<APIConceptCoveredByResourcesArgs, 'options'>>,
  known?: Resolver<Maybe<APIResolversTypes['KnownConcept']>, ParentType, ContextType>,
}>;

export type APIConceptCoveredByResourcesResultsResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['ConceptCoveredByResourcesResults'] = APIResolversParentTypes['ConceptCoveredByResourcesResults']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Resource']>, ParentType, ContextType>,
}>;

export type APICurrentUserResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['CurrentUser'] = APIResolversParentTypes['CurrentUser']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  role?: Resolver<APIResolversTypes['UserRole'], ParentType, ContextType>,
  articles?: Resolver<Maybe<APIResolversTypes['ListArticlesResult']>, ParentType, ContextType, RequireFields<APICurrentUserArticlesArgs, 'options'>>,
}>;

export type APIDeleteArticleResponseResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['DeleteArticleResponse'] = APIResolversParentTypes['DeleteArticleResponse']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<APIResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type APIDeleteConceptResultResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['DeleteConceptResult'] = APIResolversParentTypes['DeleteConceptResult']> = ResolversObject<{
  success?: Resolver<APIResolversTypes['Boolean'], ParentType, ContextType>,
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
}>;

export type APIDeleteDomainResponseResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['DeleteDomainResponse'] = APIResolversParentTypes['DeleteDomainResponse']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<APIResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type APIDomainResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['Domain'] = APIResolversParentTypes['Domain']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<APIResolversTypes['String']>, ParentType, ContextType>,
  concepts?: Resolver<Maybe<APIResolversTypes['DomainConceptsResults']>, ParentType, ContextType, RequireFields<APIDomainConceptsArgs, 'options'>>,
  resources?: Resolver<Maybe<APIResolversTypes['DomainResourcesResults']>, ParentType, ContextType, RequireFields<APIDomainResourcesArgs, 'options'>>,
}>;

export type APIDomainConceptsResultsResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['DomainConceptsResults'] = APIResolversParentTypes['DomainConceptsResults']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Concept']>, ParentType, ContextType>,
}>;

export type APIDomainResourcesResultsResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['DomainResourcesResults'] = APIResolversParentTypes['DomainResourcesResults']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Resource']>, ParentType, ContextType>,
}>;

export type APIKnownConceptResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['KnownConcept'] = APIResolversParentTypes['KnownConcept']> = ResolversObject<{
  level?: Resolver<APIResolversTypes['Float'], ParentType, ContextType>,
}>;

export type APIListArticlesResultResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['ListArticlesResult'] = APIResolversParentTypes['ListArticlesResult']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Article']>, ParentType, ContextType>,
}>;

export type APILoginResponseResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['LoginResponse'] = APIResolversParentTypes['LoginResponse']> = ResolversObject<{
  currentUser?: Resolver<APIResolversTypes['CurrentUser'], ParentType, ContextType>,
  jwt?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
}>;

export type APIMutationResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['Mutation'] = APIResolversParentTypes['Mutation']> = ResolversObject<{
  createArticle?: Resolver<APIResolversTypes['Article'], ParentType, ContextType, RequireFields<APIMutationCreateArticleArgs, 'payload'>>,
  updateArticle?: Resolver<APIResolversTypes['Article'], ParentType, ContextType, RequireFields<APIMutationUpdateArticleArgs, 'id' | 'payload'>>,
  deleteArticle?: Resolver<APIResolversTypes['DeleteArticleResponse'], ParentType, ContextType, RequireFields<APIMutationDeleteArticleArgs, 'id'>>,
  addConceptToDomain?: Resolver<APIResolversTypes['Concept'], ParentType, ContextType, RequireFields<APIMutationAddConceptToDomainArgs, 'domainId' | 'payload'>>,
  updateConcept?: Resolver<APIResolversTypes['Concept'], ParentType, ContextType, RequireFields<APIMutationUpdateConceptArgs, '_id' | 'payload'>>,
  deleteConcept?: Resolver<APIResolversTypes['DeleteConceptResult'], ParentType, ContextType, RequireFields<APIMutationDeleteConceptArgs, '_id'>>,
  setConceptsKnown?: Resolver<Array<APIResolversTypes['Concept']>, ParentType, ContextType, RequireFields<APIMutationSetConceptsKnownArgs, 'payload'>>,
  setConceptsUnknown?: Resolver<Array<APIResolversTypes['Concept']>, ParentType, ContextType, RequireFields<APIMutationSetConceptsUnknownArgs, 'conceptIds'>>,
  createDomain?: Resolver<APIResolversTypes['Domain'], ParentType, ContextType, RequireFields<APIMutationCreateDomainArgs, 'payload'>>,
  updateDomain?: Resolver<APIResolversTypes['Domain'], ParentType, ContextType, RequireFields<APIMutationUpdateDomainArgs, 'id' | 'payload'>>,
  deleteDomain?: Resolver<APIResolversTypes['DeleteDomainResponse'], ParentType, ContextType, RequireFields<APIMutationDeleteDomainArgs, 'id'>>,
  createResource?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationCreateResourceArgs, 'payload'>>,
  updateResource?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationUpdateResourceArgs, '_id' | 'payload'>>,
  addResourceToDomain?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationAddResourceToDomainArgs, 'domainId' | 'payload'>>,
  attachResourceToDomain?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationAttachResourceToDomainArgs, 'domainId' | 'resourceId'>>,
  attachResourceCoversConcepts?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationAttachResourceCoversConceptsArgs, 'resourceId' | 'conceptIds'>>,
  detachResourceCoversConcepts?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationDetachResourceCoversConceptsArgs, 'resourceId' | 'conceptIds'>>,
  addTagsToResource?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationAddTagsToResourceArgs, 'resourceId' | 'tags'>>,
  removeTagsFromResource?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIMutationRemoveTagsFromResourceArgs, 'resourceId' | 'tags'>>,
  login?: Resolver<APIResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<APIMutationLoginArgs, 'email' | 'password'>>,
  register?: Resolver<APIResolversTypes['CurrentUser'], ParentType, ContextType, RequireFields<APIMutationRegisterArgs, 'payload'>>,
  adminUpdateUser?: Resolver<APIResolversTypes['User'], ParentType, ContextType, RequireFields<APIMutationAdminUpdateUserArgs, 'id' | 'payload'>>,
}>;

export type APIQueryResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['Query'] = APIResolversParentTypes['Query']> = ResolversObject<{
  getArticleByKey?: Resolver<APIResolversTypes['Article'], ParentType, ContextType, RequireFields<APIQueryGetArticleByKeyArgs, 'key'>>,
  listArticles?: Resolver<APIResolversTypes['ListArticlesResult'], ParentType, ContextType, RequireFields<APIQueryListArticlesArgs, 'options'>>,
  getConcept?: Resolver<APIResolversTypes['Concept'], ParentType, ContextType, RequireFields<APIQueryGetConceptArgs, '_id'>>,
  getConceptByKey?: Resolver<APIResolversTypes['Concept'], ParentType, ContextType, RequireFields<APIQueryGetConceptByKeyArgs, 'key'>>,
  searchDomains?: Resolver<APIResolversTypes['SearchDomainsResult'], ParentType, ContextType, RequireFields<APIQuerySearchDomainsArgs, 'options'>>,
  getDomainByKey?: Resolver<APIResolversTypes['Domain'], ParentType, ContextType, RequireFields<APIQueryGetDomainByKeyArgs, 'key'>>,
  getResourceById?: Resolver<APIResolversTypes['Resource'], ParentType, ContextType, RequireFields<APIQueryGetResourceByIdArgs, 'id'>>,
  searchResourceTags?: Resolver<Array<APIResolversTypes['ResourceTagSearchResult']>, ParentType, ContextType, RequireFields<APIQuerySearchResourceTagsArgs, 'options'>>,
  currentUser?: Resolver<APIResolversTypes['CurrentUser'], ParentType, ContextType>,
  getUser?: Resolver<APIResolversTypes['User'], ParentType, ContextType, RequireFields<APIQueryGetUserArgs, 'key'>>,
}>;

export type APIResourceResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['Resource'] = APIResolversParentTypes['Resource']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<APIResolversTypes['ResourceType'], ParentType, ContextType>,
  mediaType?: Resolver<APIResolversTypes['ResourceMediaType'], ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<APIResolversTypes['ResourceTag']>>, ParentType, ContextType>,
  url?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<APIResolversTypes['String']>, ParentType, ContextType>,
  durationMn?: Resolver<Maybe<APIResolversTypes['Int']>, ParentType, ContextType>,
  coveredConcepts?: Resolver<Maybe<APIResolversTypes['ResourceCoveredConceptsResults']>, ParentType, ContextType, RequireFields<APIResourceCoveredConceptsArgs, 'options'>>,
  domains?: Resolver<Maybe<APIResolversTypes['ResourceDomainsResults']>, ParentType, ContextType, RequireFields<APIResourceDomainsArgs, 'options'>>,
}>;

export type APIResourceCoveredConceptsResultsResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['ResourceCoveredConceptsResults'] = APIResolversParentTypes['ResourceCoveredConceptsResults']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Concept']>, ParentType, ContextType>,
}>;

export type APIResourceDomainsResultsResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['ResourceDomainsResults'] = APIResolversParentTypes['ResourceDomainsResults']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Domain']>, ParentType, ContextType>,
}>;

export type APIResourceTagResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['ResourceTag'] = APIResolversParentTypes['ResourceTag']> = ResolversObject<{
  name?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
}>;

export type APIResourceTagSearchResultResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['ResourceTagSearchResult'] = APIResolversParentTypes['ResourceTagSearchResult']> = ResolversObject<{
  name?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  usageCount?: Resolver<Maybe<APIResolversTypes['Int']>, ParentType, ContextType>,
}>;

export type APISearchDomainsResultResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['SearchDomainsResult'] = APIResolversParentTypes['SearchDomainsResult']> = ResolversObject<{
  items?: Resolver<Array<APIResolversTypes['Domain']>, ParentType, ContextType>,
}>;

export type APIUserResolvers<ContextType = APIContext, ParentType extends APIResolversParentTypes['User'] = APIResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<APIResolversTypes['String'], ParentType, ContextType>,
  articles?: Resolver<Maybe<APIResolversTypes['ListArticlesResult']>, ParentType, ContextType, RequireFields<APIUserArticlesArgs, 'options'>>,
}>;

export type APIResolvers<ContextType = APIContext> = ResolversObject<{
  Article?: APIArticleResolvers<ContextType>,
  Concept?: APIConceptResolvers<ContextType>,
  ConceptCoveredByResourcesResults?: APIConceptCoveredByResourcesResultsResolvers<ContextType>,
  CurrentUser?: APICurrentUserResolvers<ContextType>,
  DeleteArticleResponse?: APIDeleteArticleResponseResolvers<ContextType>,
  DeleteConceptResult?: APIDeleteConceptResultResolvers<ContextType>,
  DeleteDomainResponse?: APIDeleteDomainResponseResolvers<ContextType>,
  Domain?: APIDomainResolvers<ContextType>,
  DomainConceptsResults?: APIDomainConceptsResultsResolvers<ContextType>,
  DomainResourcesResults?: APIDomainResourcesResultsResolvers<ContextType>,
  KnownConcept?: APIKnownConceptResolvers<ContextType>,
  ListArticlesResult?: APIListArticlesResultResolvers<ContextType>,
  LoginResponse?: APILoginResponseResolvers<ContextType>,
  Mutation?: APIMutationResolvers<ContextType>,
  Query?: APIQueryResolvers<ContextType>,
  Resource?: APIResourceResolvers<ContextType>,
  ResourceCoveredConceptsResults?: APIResourceCoveredConceptsResultsResolvers<ContextType>,
  ResourceDomainsResults?: APIResourceDomainsResultsResolvers<ContextType>,
  ResourceTag?: APIResourceTagResolvers<ContextType>,
  ResourceTagSearchResult?: APIResourceTagSearchResultResolvers<ContextType>,
  SearchDomainsResult?: APISearchDomainsResultResolvers<ContextType>,
  User?: APIUserResolvers<ContextType>,
}>;


