import { Test, TestingModule } from '@nestjs/testing';
import { DoctorDetailsController } from './doctor_details.controller';

describe('DoctorDetailsController', () => {
  let controller: DoctorDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorDetailsController],
    }).compile();

    controller = module.get<DoctorDetailsController>(DoctorDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
