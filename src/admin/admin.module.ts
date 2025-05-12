/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { AdminController } from './admin.controller';

@Module({
imports: [],
controllers: [AdminController],
providers: [AdminService],
})
export class AdminModule {}

