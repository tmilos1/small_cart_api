import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class NotFoundInterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }
}
import { catchError } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // next.handle() is an Observable of the controller's result value
    return next.handle()
      .pipe(catchError(error => {
        if (error instanceof EntityNotFoundError) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }));
  }
}