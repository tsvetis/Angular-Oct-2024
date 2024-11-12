import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log({ route, state });

  const router = inject(Router);
  const isLoggedIn = true; // will come from AuthService

  if (!isLoggedIn) {
    router.navigate(['/home']);
  }

  return isLoggedIn;
};
