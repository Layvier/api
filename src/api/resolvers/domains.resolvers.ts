import { Domain } from '../../entities/Domain';
import { NotFoundError } from '../../errors/NotFoundError';
import { createDomain, deleteDomain, findDomain, updateDomain } from '../../repositories/domains.repository';
import { UnauthorizedError } from '../errors/UnauthenticatedError';
import { APIDomain, APIMutationResolvers, APIQueryResolvers, UserRole } from '../schema/types';
import { nullToUndefined } from '../util/nullToUndefined';

function toAPIDomain(domain: Domain): APIDomain {
  return domain;
}

export const createDomainResolver: APIMutationResolvers['createDomain'] = async (_parent, { payload }, ctx) => {
  if (!ctx.user || ctx.user.role !== UserRole.ADMIN)
    throw new UnauthorizedError('Must be logged in and an admin to create an article');
  const createdDomain = await createDomain({ _id: ctx.user._id }, payload);
  return toAPIDomain(createdDomain);
};

export const getDomainByKeyResolver: APIQueryResolvers['getDomainByKey'] = async (_parent, { key }) => {
  const domain = await findDomain({ key });
  if (!domain) throw new NotFoundError('Domain', key, 'key');
  return toAPIDomain(domain);
};

export const updateDomainResolver: APIMutationResolvers['updateDomain'] = async (_parent, { id, payload }, ctx) => {
  if (!ctx.user || ctx.user.role !== UserRole.ADMIN)
    throw new UnauthorizedError('Must be logged in and an admin to update a domain');

  const updatedDomain = await updateDomain({ _id: id }, nullToUndefined(payload));
  if (!updatedDomain) throw new NotFoundError('Domain', id, 'id');
  return toAPIDomain(updatedDomain);
};

export const deleteDomainResolver: APIMutationResolvers['deleteDomain'] = async (_parent, { id }, ctx) => {
  if (!ctx.user || ctx.user.role !== UserRole.ADMIN)
    throw new UnauthorizedError('Must be logged in and an admin to delete a domain');

  const { deletedCount } = await deleteDomain({ _id: id });
  if (!deletedCount) throw new NotFoundError('Domain', id, 'id');
  return { _id: id, success: true };
};
