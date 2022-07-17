import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateStudentController } from './create-student.controller';
import { CreateStudentDTO } from './create-student.dto';
import { CreateStudentService } from './create-student.service';

const newStudent = {
  name: 'John Doe',
  email: 'john@email.com',
  age: 19,
  authUserId: '1',
};

describe('Create Student Controller', () => {
  let app: INestApplication;
  let controller: CreateStudentController;
  let service: CreateStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateStudentController],
      providers: [
        {
          provide: CreateStudentService,
          useValue: {
            create: jest.fn().mockResolvedValue(newStudent),
          },
        },
      ],
    }).compile();

    controller = module.get<CreateStudentController>(CreateStudentController);
    service = module.get<CreateStudentService>(CreateStudentService);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('Create', () => {
    it('[unit] should create a new student successfully', async () => {
      // Arrange
      const body: CreateStudentDTO = {
        name: 'Luís',
        email: 'luis@email.com',
        age: 20,
        coursesIds: ['1', '2'],
        authUserId: '2',
      };

      // Act
      const result = await controller.createStudent(body);

      // Assert
      expect(result).toEqual(newStudent);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(body);
    });

    it(`/POST student`, async () => {
      const body: CreateStudentDTO = {
        name: 'Luís',
        email: 'luis@email.com',
        age: 20,
        coursesIds: ['1', '2'],
        authUserId: '2',
      };

      const response = await request(app.getHttpServer())
        .post('/student')
        .send(body);

      expect(response.status).toBe(201);
    });
  });
});
