import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [LoaderComponent, LoaderComponent],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css',
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    });
  }
}
