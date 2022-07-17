import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../users/schema/user.schema';
import { AuthRequest } from '../interfaces/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
