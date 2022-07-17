import { Controller, Get } from '@nestjs/common';
import { ListAllStudentsService } from './list-all-students.service';

@Controller('student')
export class ListAllStudentsController {
  constructor(
    private readonly listAllStudentsService: ListAllStudentsService,
  ) {}

  @Get()
  async listAllStudents() {
    return this.listAllStudentsService.listAll();
  }
}
