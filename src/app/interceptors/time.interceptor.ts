import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start= performance.now();
    return next.handle(request)
    .pipe(
      tap(()=>{
        const time= (performance.now() - start) + 'ms';
        console.log(request.url,time);
      }

    ))
  }
}
