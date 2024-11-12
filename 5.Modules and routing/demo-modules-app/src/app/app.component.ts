import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-modules-app';

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userService.getToken());
  }
}
