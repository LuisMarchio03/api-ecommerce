import { Injectable } from '@nestjs/common';
import { Course } from '../../../../domain/entities/course';
import { ICourseRepository } from '../../repositories/course-repository.interface';

@Injectable()
export class ListAllCourseService {
  constructor(private readonly repository: ICourseRepository) {}

  async execute(): Promise<Course[]> {
    return this.repository.findAll();
  }
}
