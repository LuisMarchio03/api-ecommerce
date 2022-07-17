export interface ICreateStudent {
  name: string;
  email: string;
  age: number;

  coursesIds: string[];

  authUserId?: string;
}
