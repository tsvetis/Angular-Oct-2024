import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { ComplexUser, SimpleUser } from '../types';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnChanges {
  @Input('users') usersList: ComplexUser[] = [];

  constructor(private cd: ChangeDetectorRef, private us: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  refreshList() {
    // console.log(this.us.appUsers);
    this.cd.detectChanges();
  }
}
