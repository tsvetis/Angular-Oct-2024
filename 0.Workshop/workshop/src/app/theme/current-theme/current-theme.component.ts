import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css',
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['themeId'];

    this.apiService.getSingleTheme(id).subscribe((theme) => {
      this.theme = theme;
    });
  }
}
