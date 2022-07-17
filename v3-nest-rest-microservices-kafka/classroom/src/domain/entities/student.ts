export class Student {
  id: string;
  name: string;
  email: string;
  age: number;

  coursesIds: string[];

  authUserId: string;

  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = String(new Date().getTime());
      this.created_at = new Date();
      this.updated_at = new Date();
    }
  }
}
