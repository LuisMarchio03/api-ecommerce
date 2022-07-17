import { Student } from '../../../domain/entities/student';
import { ICreateStudent } from '../dto/create-student.dto';

export interface IStudentRepository {
  create(student: ICreateStudent): Promise<Student>;
  findByEmail(email: string): Promise<Student>;
  listAll(): Promise<Student[]>;
  update(id: string, student: Student): Promise<Student>;
  delete(id: string): Promise<boolean>;
  findById(id: string): Promise<Student>;
}
