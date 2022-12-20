import { JwtPayload } from 'jsonwebtoken';

export interface VerifyJwtPayload extends JwtPayload {
  id: number;
}
