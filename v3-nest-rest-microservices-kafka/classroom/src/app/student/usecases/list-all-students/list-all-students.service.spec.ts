import { StudentRepository } from '../../repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../repositories/student-repository.interface';
import { ListAllStudentsService } from './list-all-students.service';

let repository: IStudentRepository;
let service: ListAllStudentsService;

describe('ListAllStudentsService', () => {
  beforeEach(async () => {
    repository = new StudentRepository();
    service = new ListAllStudentsService(repository);
  });

  it('should be able to list all students', async () => {
    const students = [
      {
        name: 'John Doe',
        email: 'john@email.com',
        age: 28,
        coursesIds: ['1', '2'],
        authUserId: '1',
      },
      {
        name: 'Luís',
        email: 'luis@email.com',
        age: 19,
        coursesIds: ['1', '2'],
        authUserId: '2',
      },
    ];

    await Promise.all(
      students.map(async (student) => {
        await repository.create(student);
      }),
    );

    const result = await service.listAll();
    expect(result).toMatchObject(students);
  });
});
