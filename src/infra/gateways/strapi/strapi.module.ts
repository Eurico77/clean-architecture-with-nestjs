import { Module } from '@nestjs/common';
import { StrapiClientService } from './client';

@Module({
  imports: [
  ],

  exports: [
    StrapiClientService,
  ],
  providers: [
    StrapiClientService,
  ],
 
})
export class StrapiModule {}
