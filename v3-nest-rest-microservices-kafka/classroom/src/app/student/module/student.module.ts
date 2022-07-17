import { Module } from '@nestjs/common';
import { CreateStudentController } from '../usecases/create-student/create-student.controller';
import { CreateStudentService } from '../usecases/create-student/create-student.service';
import { DeleteStudentController } from '../usecases/delete-student/delete-student.controller';
import { DeleteStudentService } from '../usecases/delete-student/delete-student.service';
import { ListAllStudentsController } from '../usecases/list-all-students/list-all-students.controller';
import { ListAllStudentsService } from '../usecases/list-all-students/list-all-students.service';
import { ListStudentByIdController } from '../usecases/list-student-by-id/list-student-by-id.controller';
import { ListStudentByIdService } from '../usecases/list-student-by-id/list-student-by-id.service';
import { UpdateStudentController } from '../usecases/update-student/update-student.controller';
import { UpdateStudentService } from '../usecases/update-student/update-student.service';

@Module({
  imports: [],
  controllers: [
    CreateStudentController,
    ListAllStudentsController,
    UpdateStudentController,
    DeleteStudentController,
    ListStudentByIdController,
  ],
  providers: [
    CreateStudentService,
    ListAllStudentsService,
    UpdateStudentService,
    DeleteStudentService,
    ListStudentByIdService,
  ],
  exports: [],
})
export class StudentModule {}
