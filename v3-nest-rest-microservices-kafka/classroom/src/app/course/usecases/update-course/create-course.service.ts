import { Injectable } from '@nestjs/common';
import { Course } from '../../../../domain/entities/course';
import { IUpdateCourseDTO } from '../../dto/update-course.dto';
import { ICourseRepository } from '../../repositories/course-repository.interface';

@Injectable()
export class UpdateCourseService {
  constructor(private repository: ICourseRepository) {}

  async updateCourse(id: string, course: IUpdateCourseDTO): Promise<Course> {
    return this.repository.update(id, course);
  }
}
