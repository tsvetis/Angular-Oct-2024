import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorMsgService {
  private apiError$$ = new BehaviorSubject(null);
  public apiError$ = this.apiError$$.asObservable();

  constructor() {}

  setError(error: any): void {
    this.apiError$$.next(error);
  }
}
