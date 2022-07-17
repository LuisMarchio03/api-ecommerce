import { StudentRepository } from '../../../student/repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../../student/repositories/student-repository.interface';
import { ICourseRepository } from '../../repositories/course-repository.interface';
import { CourseRepositoryInMemory } from '../../repositories/mocks/in-memory/course-repository.in-memory';
import { CreateCourseService } from '../create-course/create-course.service';
import { ListAllCourseService } from './list-all-course.service';

describe('Find All', () => {
  let studentRepository: IStudentRepository;
  let repository: ICourseRepository;

  let createCourseService: CreateCourseService;
  let service: ListAllCourseService;

  beforeEach(() => {
    studentRepository = new StudentRepository();
    repository = new CourseRepositoryInMemory();

    createCourseService = new CreateCourseService(repository);
    service = new ListAllCourseService(repository);
  });

  it('should be able to list all students', async () => {
    const student = await studentRepository.create({
      name: 'Luís',
      email: 'luis@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '2',
    });

    await createCourseService.createCourse({
      title: 'course1',
      slug: 'course1',
      description: 'test',
      image: 'Image',
      duration: 1200,
      studentId: student.id,
    });

    await createCourseService.createCourse({
      title: 'course2',
      slug: 'course2',
      description: 'test2',
      image: 'Image2',
      duration: 1500,
      studentId: student.id,
    });

    expect(await service.execute()).toHaveLength(2);
  });
});
