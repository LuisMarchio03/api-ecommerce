import { Course } from '../../../../../domain/entities/course';
import { ICreateCourseDTO } from '../../../dto/create-course.dto';
import { IUpdateCourseDTO } from '../../../dto/update-course.dto';
import { ICourseRepository } from '../../course-repository.interface';

export class CourseRepositoryInMemory implements ICourseRepository {
  private courses: Course[] = [];

  create(course: ICreateCourseDTO): Promise<Course> {
    const newCourse = {
      id: String(new Date().getTime()),
      title: course.title,
      slug: course.slug,
      description: course.description,
      image: course.image,
      duration: Number(course.duration),
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.courses.push(newCourse);
    return Promise.resolve(newCourse);
  }

  findAll(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }

  findById(id: string): Promise<Course> {
    return Promise.resolve(this.courses.find((course) => course.id === id));
  }

  async update(id: string, course: IUpdateCourseDTO): Promise<Course> {
    const courseFindById = await this.courses.find(
      (course) => course.id === id,
    );

    courseFindById.title = course.title;
    courseFindById.slug = course.slug;
    courseFindById.description = course.description;
    courseFindById.image = course.image;
    courseFindById.duration = course.duration;

    return Promise.resolve(courseFindById);
  }
}
