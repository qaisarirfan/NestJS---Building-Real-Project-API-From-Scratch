import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/constants';
import { ExpressRequest } from 'src/types/expressRequest.interface';
import { VerifyJwtPayload } from 'src/types/jwtPayload.interface';
import { UserService } from '../user.service';

@Injectable()
export class AuthMiddleWare implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = authorization.split(' ')[1];
    try {
      const decode = verify(token, JWT_SECRET) as VerifyJwtPayload;
      const user = await this.userService.findOne(decode?.id);
      req.user = user;
      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}
