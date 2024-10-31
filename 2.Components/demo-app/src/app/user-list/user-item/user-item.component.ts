import { Component, Input } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  @Input('userProp') user: User | null = null;
}
