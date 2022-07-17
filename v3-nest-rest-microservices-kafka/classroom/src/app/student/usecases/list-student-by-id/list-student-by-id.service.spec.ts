import { StudentRepository } from '../../repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../repositories/student-repository.interface';
import { ListStudentByIdService } from './list-student-by-id.service';

let repository: IStudentRepository;
let service: ListStudentByIdService;

describe('ListStudentByIdService', () => {
  beforeEach(async () => {
    repository = new StudentRepository();
    service = new ListStudentByIdService(repository);
  });

  it('should be able to list my infos', async () => {
    const createStudent = await repository.create({
      name: 'Luís Gabriel',
      email: 'luis@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '4',
    });

    const student = {
      name: 'Luís Gabriel',
      email: 'luis@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '4',
    };

    const result = await service.execute(createStudent.id);
    expect(result).toMatchObject(student);
  });
});
