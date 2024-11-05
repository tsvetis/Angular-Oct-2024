import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ComplexUser, SimpleUser } from '../types';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root', // Global!
// })

@Injectable()
export class UserService implements OnDestroy {
  URL = 'https://jsonplaceholder.typicode.com/users';
  appUsers: ComplexUser[] = [];

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    // Unsubscribe from events
  }

  getUsers() {
    // return fetch(this.URL).then((res) => res.json());
    return this.http.get<ComplexUser[]>(this.URL);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    // this.appUsers = [...this.appUsers, user]; // !IMPORTANT HACK
    // this.appUsers.push(user);

    inputName.value = '';
    inputAge.value = '';

    console.log(this.appUsers);
  }
}
