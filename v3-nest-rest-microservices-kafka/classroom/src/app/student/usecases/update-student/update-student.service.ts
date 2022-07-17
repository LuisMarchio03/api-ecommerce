import { Injectable } from '@nestjs/common';
import { Student } from '../../../../domain/entities/student';
import { IStudentRepository } from '../../repositories/student-repository.interface';

@Injectable()
export class UpdateStudentService {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async update(id: string, student: Student) {
    return this.studentRepository.update(id, student);
  }
}
