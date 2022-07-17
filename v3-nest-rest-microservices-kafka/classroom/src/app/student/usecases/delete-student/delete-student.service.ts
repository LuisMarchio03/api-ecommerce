import { Injectable } from '@nestjs/common';
import { IStudentRepository } from '../../repositories/student-repository.interface';

@Injectable()
export class DeleteStudentService {
  constructor(private readonly repository: IStudentRepository) {}

  async delete(id: string): Promise<boolean> {
    return await this.repository.delete(id);
  }
}
