export interface UserPayload {
  sub: string;
  email: string;
  name: string;
  isAdmin: boolean;
  iat?: number;
  exp?: number;
}
