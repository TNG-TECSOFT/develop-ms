import { SetMetadata } from '@nestjs/common';

// Roles list: general, write, admin
export const Permissions = (...permissions: string[]) =>
  SetMetadata('permissions', permissions);
