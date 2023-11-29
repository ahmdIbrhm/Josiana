import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, from, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage/storage.service';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.storageService.getUser().token;
    const isLoginOrSingUp = request.url.includes("/auth/");
    if (!isLoginOrSingUp) {
      request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
      });
  }
  return next.handle(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Redirect to the login page for unauthorized requests
        this.router.navigate(['authentication/login']);
      } else if (error.status === 403) {
        // Redirect to a forbidden page for forbidden requests
        console.log('Access forbidden: ' + error.message);
        this.router.navigate(['/forbidden']);
      } else if (error.status === 404) {
        console.log('Resource not found: ' + error.message);
        this.router.navigate(['authentication/error']);
      } else if (error.status === 409) {
        console.log('Conflict error: ' + error.error.message);
      } else if (error.status === 406) {
        console.log(
          'Illegal argument error: ' + error.error.message
        );
      } else if (error.status >= 500) {
        console.log('Server error occurred: ' + error.message);
      } else {
        console.log('Unknown error: ' + error.message);
      }
      return throwError(() => error);
    }),
  );
}
}
