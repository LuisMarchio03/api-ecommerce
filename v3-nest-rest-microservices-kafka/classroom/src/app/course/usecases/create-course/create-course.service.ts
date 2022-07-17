import { Injectable } from '@nestjs/common';
import { Course } from '../../../../domain/entities/course';
import { ICreateCourseDTO } from '../../dto/create-course.dto';
import { ICourseRepository } from '../../repositories/course-repository.interface';

@Injectable()
export class CreateCourseService {
  constructor(private repository: ICourseRepository) {}

  async createCourse(course: ICreateCourseDTO): Promise<Course> {
    return this.repository.create(course);
  }
}
