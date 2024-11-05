import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ComplexUser, SimpleUser } from './types';
import { UserService } from './user-list/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  isLoading = true;
  users: ComplexUser[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.appUsers;
  }

  ngOnInit() {
    // this.userService.getUsers().then((users) => {
    //   this.users = users;
    // });

    this.userService.getUsers().subscribe((users) => {
      setTimeout(() => {
        this.users = users;
        this.isLoading = false;
      }, 3000);
    });
  }

  handleClick() {
    this.title = 'ZDR!';
  }

  addSimpleUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // Validate input
    this.userService.addUser(inputName, inputAge);
  }
}
