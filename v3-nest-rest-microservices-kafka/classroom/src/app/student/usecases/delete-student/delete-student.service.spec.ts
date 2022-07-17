import { StudentRepository } from '../../repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../repositories/student-repository.interface';
import { DeleteStudentService } from './delete-student.service';

let repository: IStudentRepository;
let service: DeleteStudentService;

describe('DeleteStudentService', () => {
  beforeEach(async () => {
    repository = new StudentRepository();
    service = new DeleteStudentService(repository);
  });

  it('should be able to delete a student', async () => {
    const createStudent = await repository.create({
      name: 'John Doe',
      email: 'john@email.com',
      age: 50,
      coursesIds: ['1', '2'],
      authUserId: '1',
    });

    expect(service.delete(createStudent.id)).toBeTruthy();
  });
});
