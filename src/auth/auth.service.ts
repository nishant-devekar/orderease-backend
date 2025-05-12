/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'src/shared/logger/logger.service';
import { ApiResponseHelperService } from 'src/shared/response/api-response-helper.service';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private readonly adminService: AdminService,
        private readonly logger: LoggerService,
        private readonly apiHelper: ApiResponseHelperService,
      ) {}
    
      async validateUser(email: string, password: string): Promise<{ email: string; id: number } | null> {
        const context = 'AuthService.validateUser';
        try {
          const admin = await this.adminService.validateUser(email, password);
          return admin;
        } catch (error) {
          this.logger.error('Error validating user', error.stack, context);
          return null;
        }
      }
    
      async login(user: { email: string; id: number }) {
        const context = 'AuthService.login';
        try {
          const payload = { email: user.email, sub: user.id };
          const token = this.jwtService.sign(payload);
          return this.apiHelper.getSuccessResponse({ message: 'Login successful', access_token: token });
        } catch (error) {
          this.logger.error('Error generating token', error.stack, context);
          return this.apiHelper.getFailureResponseSingle(
            { code: '500', message: 'An error occurred during login' },
            error
          );
        }
      }
}
