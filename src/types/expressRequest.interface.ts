import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface ExpressRequest extends Request {
  user?: User;
}
