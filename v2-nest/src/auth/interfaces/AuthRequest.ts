import { Request } from 'express';
import { User } from '../../users/schema/user.schema';

export interface AuthRequest extends Request {
  user: User;
}
