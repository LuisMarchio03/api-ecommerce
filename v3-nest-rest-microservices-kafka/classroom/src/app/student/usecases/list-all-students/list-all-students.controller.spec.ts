import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ListAllStudentsController } from './list-all-students.controller';
import { ListAllStudentsService } from './list-all-students.service';

describe('List All Student Controller', () => {
  let app: INestApplication;
  let controller: ListAllStudentsController;
  let service: ListAllStudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListAllStudentsController],
      providers: [
        {
          provide: ListAllStudentsService,
          useValue: {
            listAll: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<ListAllStudentsController>(
      ListAllStudentsController,
    );
    service = module.get<ListAllStudentsService>(ListAllStudentsService);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('Create', () => {
    it('[unit] should create a new todo item successfully', async () => {
      const result = await controller.listAllStudents();
      expect(result).toEqual([]);
    });

    it(`/GET List all Students`, async () => {
      const response = await request(app.getHttpServer()).get('/student');
      expect(response.status).toBe(200);
    });
  });
});
