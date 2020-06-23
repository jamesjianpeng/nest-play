import { Test, TestingModule } from '@nestjs/testing';
import { SliceUplaodService } from './slice-uplaod.service';

describe('SliceUplaodService', () => {
  let service: SliceUplaodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliceUplaodService],
    }).compile();

    service = module.get<SliceUplaodService>(SliceUplaodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
