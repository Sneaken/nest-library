import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';
import { formatDate } from '../../util/time';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    if (exception instanceof ApiException) {
      response.status(status).json({
        code: exception.getErrorCode(),
        errorMessage: exception.getErrorMessage(),
        date: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        path: request.url,
      });
    } else {
      response.status(status).json({
        code: status,
        date: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        path: request.url,
      });
    }
  }
}
