import { Injectable } from '@nestjs/common';
import { IStudentRepository } from '../../repositories/student-repository.interface';

@Injectable()
export class ListStudentByIdService {
  constructor(private readonly repository: IStudentRepository) {}

  execute(id: string) {
    return this.repository.findById(id);
  }
}
