import { Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthGuard } from './common/guards/auth.guard';
import { UserDataInterceptor } from './common/interceptors/userData.interceptor';
import * as jwt from 'jsonwebtoken';
import { ROLE_ADMIN, ROLE_GENERAL } from './common/constants/roles';
import { Permissions } from './common/permissions/permissions';

@Controller()
export class AppController {

  private verifyToken(token: string) {
    try {
      const decoded = jwt.decode(token)
      return decoded; // Return the decoded token if valid
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  @MessagePattern('checkHealth')
  handleCheckHealth() {
    try{
      return 'OK';
    } catch (error) {
      return error;
    }    
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(UserDataInterceptor)
  @Permissions(ROLE_ADMIN, ROLE_GENERAL)
  @MessagePattern('getPrivate')
  handleGetPrivate(@Payload() payload: { token: string, message: string, email: string }) {
    const { token, message, email } = payload;
    try {
      // Verify token
      const decodedToken = this.verifyToken(token.replace('Bearer', '').trim());
      
      return {
        error: 0,
        message: 'This is a private route. Email: ' + email + ' DecodedToken: ' + JSON.stringify(decodedToken)
      };
    } catch (error) {
      // Return an error response as an object, to keep consistency
      return { 
        error: 1,
        message: error.message 
      };
    }
  }
}