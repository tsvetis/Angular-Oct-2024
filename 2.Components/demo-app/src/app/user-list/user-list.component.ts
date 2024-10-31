import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { User } from './types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = [
    { name: 'Pesho', age: 22 },
    { name: 'Ivan', age: 33 },
    { name: 'Mira', age: 12 },
    { name: 'Denis', age: 55 },
    { name: 'Kircho', age: 90 },
  ];
}
