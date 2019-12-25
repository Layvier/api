import { createRelatedNode, attachNodes, findOne } from './util/abstract_graph_repo';
import * as shortid from 'shortid';
import { Resource, ResourceType, ResourceMediaType, ResourceLabel } from '../entities/Resource';
import { UserLabel } from '../entities/User';
import { ResourceDomainTeachesLabel } from '../entities/relationships/ResourceDomainTeaches';
import { DomainLabel } from '../entities/Domain';

interface CreateResourceData {
  name: string;
  type: ResourceType;
  mediaType: ResourceMediaType;
  url: string;
  description?: string;
}

export const createResource = (user: { _id: string }, data: CreateResourceData): Promise<Resource> =>
  createRelatedNode({
    originNode: { label: UserLabel, filter: user },
    relationship: { label: 'CREATED', props: { createdAt: Date.now() } },
    newNode: { label: ResourceLabel, props: { ...data, _id: shortid.generate() } },
  });

export const attachResourceToDomain = (resourceId: string, domainId: string) =>
  attachNodes({
    originNode: { label: ResourceLabel, filter: { _id: resourceId } },
    relationship: { label: ResourceDomainTeachesLabel, props: {} },
    destinationNode: { label: DomainLabel, filter: { _id: domainId } },
  });

export const findResource = findOne<Resource, { _id: string }>({ label: ResourceLabel });
