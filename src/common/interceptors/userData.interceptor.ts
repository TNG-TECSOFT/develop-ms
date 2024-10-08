import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
const jwt = require('jsonwebtoken');

@Injectable()
export class UserDataInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const data = context.switchToRpc().getData();
    const token = data.token.replace('Bearer', '').trim();
    const decodedToken = jwt.decode(token);
    
    data.email = decodedToken.email
      ? decodedToken.email
      : decodedToken['cognito:username'];
    
      return next.handle();
  }
}
