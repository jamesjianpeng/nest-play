import { Module } from '@nestjs/common';
import { SliceUplaodService } from './slice-uplaod.service';

@Module({
  providers: [SliceUplaodService],
  exports: [SliceUplaodService],
})
export class SliceUplaodModule {}
