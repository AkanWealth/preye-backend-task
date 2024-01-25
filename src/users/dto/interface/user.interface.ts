import { User } from 'src/users/entities/user.entity';

export interface VerificationResult {
  verified: boolean;
  access_token?: string;
  user?: User;
}
