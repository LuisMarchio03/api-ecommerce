import { Module } from '@nestjs/common';
import { CourseModule } from '../course/module/course.module';
import { StudentModule } from '../student/module/student.module';

@Module({
  imports: [StudentModule, CourseModule],
  providers: [],
  exports: [],
})
export class HttpModule {}
