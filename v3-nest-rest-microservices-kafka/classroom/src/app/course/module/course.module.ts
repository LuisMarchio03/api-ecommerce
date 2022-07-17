import { Module } from '@nestjs/common';
import { CreateCourseService } from '../usecases/create-course/create-course.service';
import { ListAllCourseService } from '../usecases/list-all-course/list-all-course.service';

@Module({
  providers: [CreateCourseService, ListAllCourseService],
  controllers: [],
})
export class CourseModule {}
