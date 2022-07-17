import { Course } from '../../../domain/entities/course';
import { ICreateCourseDTO } from '../dto/create-course.dto';
import { IUpdateCourseDTO } from '../dto/update-course.dto';

export interface ICourseRepository {
  create(course: ICreateCourseDTO): Promise<Course>;
  findAll(): Promise<Course[]>;
  findById(id: string): Promise<Course>;
  update(id: string, course: IUpdateCourseDTO): Promise<Course>;
}
