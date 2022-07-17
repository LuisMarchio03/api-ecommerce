import { UpdateCourseService } from './create-course.service';
import { StudentRepository } from '../../../student/repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../../student/repositories/student-repository.interface';
import { ICourseRepository } from '../../repositories/course-repository.interface';
import { CourseRepositoryInMemory } from '../../repositories/mocks/in-memory/course-repository.in-memory';

describe('UpdateCourseService', () => {
  let studentRepository: IStudentRepository;
  let repository: ICourseRepository;
  let service: UpdateCourseService;

  beforeEach(async () => {
    studentRepository = new StudentRepository();
    repository = new CourseRepositoryInMemory();
    service = new UpdateCourseService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should update a course existing', async () => {
    const student = await studentRepository.create({
      name: 'Luís',
      email: 'luis@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '2',
    });

    const obj = {
      title: 'course 01',
      slug: 'course-01',
      description: 'test',
      image: 'Image',
      duration: 1200,
    };

    const course = await service.updateCourse(student.id, obj);
    expect(course).toBeDefined();
    expect(course.slug).toBe('course-01');
  });
});
