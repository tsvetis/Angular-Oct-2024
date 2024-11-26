import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { API_URL } from './constants';
import { catchError, EMPTY, tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api')) {
    req = req.clone({
      url: req.url.replace('/api', API_URL),
    });
  }

  return next(req).pipe(
    // Reads the data
    tap((req) => {
      if (req instanceof HttpRequest) {
        // Advanced Loging Mechanism
        console.log(`[${req.url}]`, req);
      }
    }),
    // Handles the error
    catchError((err) => {
      if (err.status === 0) {
        console.error('Error from Interceptor: ', err);
        return EMPTY;
      }

      return [err];
    })
  );
};
