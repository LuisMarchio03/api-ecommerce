import { Injectable } from '@nestjs/common';
import { IStudentRepository } from '../../repositories/student-repository.interface';

@Injectable()
export class ListAllStudentsService {
  constructor(private readonly repository: IStudentRepository) {}

  async listAll() {
    return this.repository.listAll();
  }
}
