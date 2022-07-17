export class CreateStudentDTO {
  name: string;
  email: string;
  age: number;

  coursesIds: string[];

  authUserId: string;
}
