export class Course {
  id: string;

  title: string;
  slug: string;

  description: string;
  image: string;

  duration: number;

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
