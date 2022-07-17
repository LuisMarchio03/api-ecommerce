import { Injectable } from '@nestjs/common';
import { Student } from '../../../../domain/entities/student';
import { IStudentRepository } from '../../repositories/student-repository.interface';
import { CreateStudentDTO } from './create-student.dto';

@Injectable()
export class CreateStudentService {
  constructor(private studentRepository: IStudentRepository) {}

  async create(student: CreateStudentDTO): Promise<Student> {
    const studentAlreadyExists = await this.studentRepository.findByEmail(
      student.email,
    );

    if (studentAlreadyExists) {
      throw new Error('Student already exists');
    }

    return this.studentRepository.create(student);
  }
}
