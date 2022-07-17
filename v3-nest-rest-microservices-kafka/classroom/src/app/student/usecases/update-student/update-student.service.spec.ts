import { Student } from '../../../../domain/entities/student';
import { StudentRepository } from '../../repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../repositories/student-repository.interface';
import { UpdateStudentService } from './update-student.service';

let repository: IStudentRepository;
let service: UpdateStudentService;

describe('UpdateStudentService', () => {
  beforeEach(async () => {
    repository = new StudentRepository();
    service = new UpdateStudentService(repository);
  });

  it('should not be able to update if Student not found', async () => {
    //
  });

  it('should be able to update user already exists', async () => {
    const createStudent = await repository.create({
      name: 'John Doe',
      email: 'john@email.com',
      age: 50,
      coursesIds: ['1', '2'],
      authUserId: '1',
    });

    const student: Student = {
      id: createStudent.id,
      name: 'Luís Gabriel',
      email: 'luis@email.com',
      age: 19,
      authUserId: '1',
      coursesIds: ['1', '2'],
      created_at: new Date(),
      updated_at: new Date(),
    };

    const updateStudent = await service.update(createStudent.id, student);

    expect(updateStudent.name).toBe('Luís Gabriel');
    expect(updateStudent.email).toBe('luis@email.com');
    expect(updateStudent.age).toBe(19);
    expect(updateStudent).toBeTruthy();
  });
});
