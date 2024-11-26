import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<Object | null>(null);
  private isLoading$$ = new BehaviorSubject(false);

  public user$ = this.user$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.isLoading$$.next(true);

    this.http.get('/api/users').subscribe((users) => {
      this.user$$.next(users);
      this.isLoading$$.next(false);
    });
  }
}
