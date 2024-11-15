import { Component } from '@angular/core';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { ThemesListComponent } from '../theme/themes-list/themes-list.component';
import { UserService } from '../user/user.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesListComponent, PostsListComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) {}
}
