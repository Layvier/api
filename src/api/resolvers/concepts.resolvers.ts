import { Concept } from '../../entities/Concept';
import { NotFoundError } from '../../errors/NotFoundError';
import {
  attachConceptToDomain,
  createConcept,
  deleteConcept,
  findConcept,
  getConceptDomain,
  updateConcept,
  getConceptCoveredByResources,
} from '../../repositories/concepts.repository';
import { UnauthorizedError } from '../errors/UnauthenticatedError';
import { APIConcept, APIConceptResolvers, APIMutationResolvers, APIQueryResolvers, UserRole } from '../schema/types';
import { nullToUndefined } from '../util/nullToUndefined';
import { toAPIResource } from './resources.resolvers';

function toAPIConcept(concept: Concept): APIConcept {
  return concept;
}

export const getConceptResolver: APIQueryResolvers['getConcept'] = async (_parent, { _id }) => {
  const concept = await findConcept({ _id });
  if (!concept) throw new NotFoundError('Concept', _id, '_id');
  return toAPIConcept(concept);
};

export const addConceptToDomainResolver: APIMutationResolvers['addConceptToDomain'] = async (
  _parent,
  { payload, domainId },
  ctx
) => {
  if (!ctx.user || ctx.user.role !== UserRole.ADMIN)
    throw new UnauthorizedError('Must be logged in and an admin to create a concept');
  const createdConcept = await createConcept({ _id: ctx.user._id }, nullToUndefined(payload));
  await attachConceptToDomain(createdConcept._id, domainId);
  return toAPIConcept(createdConcept);
};

export const updateConceptResolver: APIMutationResolvers['updateConcept'] = async (_parent, { _id, payload }, ctx) => {
  if (!ctx.user || ctx.user.role !== UserRole.ADMIN)
    throw new UnauthorizedError('Must be logged in and an admin to update a concept');

  const updatedConcept = await updateConcept({ _id }, nullToUndefined(payload));
  if (!updatedConcept) throw new NotFoundError('Concept', _id, 'id');
  return toAPIConcept(updatedConcept);
};

export const deleteConceptResolver: APIMutationResolvers['deleteConcept'] = async (_parent, { _id }, ctx) => {
  if (!ctx.user || ctx.user.role !== UserRole.ADMIN)
    throw new UnauthorizedError('Must be logged in and an admin to delete a concept');

  const { deletedCount } = await deleteConcept({ _id });
  if (!deletedCount) throw new NotFoundError('Concept', _id, '_id');
  return { _id, success: true };
};

export const getConceptDomainResolver: APIConceptResolvers['domain'] = async concept => {
  return await getConceptDomain(concept._id);
};

export const getConceptCoveredByResourcesResolver: APIConceptResolvers['coveredByResources'] = async (
  concept,
  { options }
) => {
  return { items: (await getConceptCoveredByResources(concept._id)).map(toAPIResource) };
};
