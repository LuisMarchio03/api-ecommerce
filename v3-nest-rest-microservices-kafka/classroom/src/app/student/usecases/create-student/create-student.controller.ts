import { Body, Post, Controller } from '@nestjs/common';
import { CreateStudentDTO } from './create-student.dto';
import { CreateStudentService } from './create-student.service';

@Controller('student')
export class CreateStudentController {
  constructor(private readonly createStudentService: CreateStudentService) {}

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDTO) {
    return this.createStudentService.create(createStudentDto);
  }
}
