import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
  providers: [UserService],
  exports: [UserComponent],
})
export class UserModule {}
