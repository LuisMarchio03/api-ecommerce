import { Injectable } from '@nestjs/common';
import { Course } from '../../../../domain/entities/course';
import { ICourseRepository } from '../../repositories/course-repository.interface';

@Injectable()
export class ListCourseByIdService {
  constructor(private readonly repository: ICourseRepository) {}

  async execute(id: string): Promise<Course> {
    return this.repository.findById(id);
  }
}
