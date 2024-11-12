import { ResolveFn } from '@angular/router';
import { User } from '../../types/user';
import { inject } from '@angular/core';
import { UsersService } from '../users.service';

export const UserDetailsResolver: ResolveFn<User> = (route) => {
  const userService = inject(UsersService);
  const id = route.params['id'];
  return userService.getSingleUser(id);
};
