import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
  standalone: true,
})
export class NavigationBarComponent {
  title = 'My Navigation Component';
}
