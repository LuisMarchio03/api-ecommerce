import { StudentRepository } from '../../../student/repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../../student/repositories/student-repository.interface';
import { ICourseRepository } from '../../repositories/course-repository.interface';
import { CourseRepositoryInMemory } from '../../repositories/mocks/in-memory/course-repository.in-memory';
import { CreateCourseService } from '../create-course/create-course.service';
import { ListCourseByIdService } from './list-all-course.service';

describe('Find All', () => {
  let studentRepository: IStudentRepository;
  let repository: ICourseRepository;

  let createCourseService: CreateCourseService;
  let service: ListCourseByIdService;

  beforeEach(() => {
    studentRepository = new StudentRepository();
    repository = new CourseRepositoryInMemory();

    createCourseService = new CreateCourseService(repository);
    service = new ListCourseByIdService(repository);
  });

  it('should be able to list course by id', async () => {
    const student = await studentRepository.create({
      name: 'Luís',
      email: 'luis@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '2',
    });

    const course = await createCourseService.createCourse({
      title: 'course1',
      slug: 'course1',
      description: 'test',
      image: 'Image',
      duration: 1200,
      studentId: student.id,
    });

    await expect(service.execute(course.id)).resolves.toMatchObject(course);
    await expect(service.execute(course.id)).resolves.toBeTruthy();
    await expect(service.execute(course.id)).resolves.not.toBe(undefined);
    await expect(service.execute(course.id)).resolves.not.toThrow();
  });
});
