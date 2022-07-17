import { Student } from '../../../../../domain/entities/student';
import { ICreateStudent } from '../../../dto/create-student.dto';
import { IStudentRepository } from '../../student-repository.interface';

export class StudentRepository implements IStudentRepository {
  private students: Student[] = [];

  create(student: ICreateStudent): Promise<Student> {
    const newStudent = {
      id: String(new Date().getTime()),
      name: student.name,
      email: student.email,
      age: Number(student.age),

      coursesIds: student.coursesIds,

      authUserId: student.authUserId,

      created_at: new Date(),
      updated_at: new Date(),
    };

    this.students.push(newStudent);
    return Promise.resolve(newStudent);
  }

  findByEmail(email: string): Promise<Student> {
    const student = this.students.find((student) => student.email === email);
    return Promise.resolve(student);
  }

  listAll(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  update(id: string, student: Student): Promise<Student> {
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = student;
    return Promise.resolve(student);
  }

  delete(id: string): Promise<boolean> {
    const index = this.students.findIndex((student) => student.id === id);
    this.students.splice(index, 1);
    return Promise.resolve(true);
  }

  findById(id: string): Promise<Student> {
    const student = this.students.find((student) => student.id === id);
    return Promise.resolve(student);
  }
}
