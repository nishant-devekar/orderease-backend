/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoggerService } from 'src/shared/logger/logger.service';
import { ApiResponseHelperService } from 'src/shared/response/api-response-helper.service';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly logger: LoggerService,
        private readonly apiHelper: ApiResponseHelperService,
      ) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({ type: LoginRequestDto })
    async login(@Request() req: any) {
        const context = 'AuthController.login';
        try {
        const user = req.user;
        return await this.authService.login({ email: user.email, id: user.id });
        } catch (error) {
        this.logger.error('Error during login', error.stack, context);
        return this.apiHelper.getFailureResponseSingle(
            { code: '500', message: 'Login failed' },
            error
        );
    }
  }
}
