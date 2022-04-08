import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {catchError, Observable} from 'rxjs';
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(
    private messageService: NzMessageService
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })
    return next.handle(authReq).pipe(
      catchError((err) => {
        this.messageService.error(err?.error || err.message)
        throw err
      })
    )
  }


}
