/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ApiResponseHelperService } from './response/api-response-helper.service';

@Module({
    providers: [LoggerService, ApiResponseHelperService],
    exports: [LoggerService, ApiResponseHelperService],
  })
export class SharedModule {}
