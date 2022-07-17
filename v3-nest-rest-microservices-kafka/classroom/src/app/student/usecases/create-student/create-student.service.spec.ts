import { CreateStudentService } from './create-student.service';
import { IStudentRepository } from '../../repositories/student-repository.interface';
import { StudentRepository } from '../../repositories/mocks/in-memory/student-repository.in-memory';

let repository: IStudentRepository;
let service: CreateStudentService;

describe('CreateStudentService', () => {
  beforeEach(async () => {
    repository = new StudentRepository();
    service = new CreateStudentService(repository);
  });

  it('should be able to create a new Student', async () => {
    const response = await service.create({
      name: 'John Doe',
      email: 'john@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '1',
    });

    expect(response).toBeTruthy();
  });

  it('should not be able to create a Student already exists', async () => {
    await service.create({
      name: 'John Doe',
      email: 'john@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '1',
    });

    const student = {
      name: 'John Doe',
      email: 'john@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '1',
    };
    await expect(service.create(student)).rejects.toThrowError(
      'Student already exists',
    );
  });
});
