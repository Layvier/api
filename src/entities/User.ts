export const UserLabel = 'User';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface User {
  _id: string;
  email: string;
  displayName: string;
  key: string;
  password_hash?: string; // Either password_hash or googleUserId is required
  googleUserId?: string;
  role: UserRole;
  active: boolean; //email verified
}
