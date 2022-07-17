import { StudentRepository } from '../../../student/repositories/mocks/in-memory/student-repository.in-memory';
import { IStudentRepository } from '../../../student/repositories/student-repository.interface';
import { ICourseRepository } from '../../repositories/course-repository.interface';
import { CourseRepositoryInMemory } from '../../repositories/mocks/in-memory/course-repository.in-memory';
import { CreateCourseService } from './create-course.service';

describe('CreateCourseService', () => {
  let studentRepository: IStudentRepository;
  let repository: ICourseRepository;
  let service: CreateCourseService;

  beforeEach(async () => {
    studentRepository = new StudentRepository();
    repository = new CourseRepositoryInMemory();
    service = new CreateCourseService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new course', async () => {
    const student = await studentRepository.create({
      name: 'Luís',
      email: 'luis@email.com',
      age: 19,
      coursesIds: ['1', '2'],
      authUserId: '2',
    });

    const obj = {
      id: '1',
      title: 'course1',
      slug: 'course1',
      description: 'test',
      image: 'Image',
      duration: 1200,
      studentId: student.id,
    };

    const course = await service.createCourse(obj);
    expect(course).toBeDefined();
    expect(course.slug).toBe('course1');
  });
});

// const obj = {
//   id: '1',
//   title: 'test',
//   slug: 'test',
//   description: 'test',
//   image: 'Image',
//   duration: 1200,
//   studentId: student.id,
//   classes: [
//     {
//       title: 'aula 01',
//       slug: 'aula-01',
//       description: 'aula',
//       thumb: '342321323123.jpg',
//       video: '232132313.mp4',
//       duration: 1000,
//       courseId: '1',
//     },
//     {
//       title: 'aula 02',
//       slug: 'aula-02',
//       description: 'aula2',
//       thumb: '342321323123.jpg',
//       video: '232132313.mp4',
//       duration: 200,
//       courseId: '1',
//     },
//   ],
// };
