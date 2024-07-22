import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/auth/login/login.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const _LoginService = inject(LoginService);
  const router = inject(Router);
  const toaster = inject(ToastrService);
  _LoginService.isLoggedIn$().subscribe((isLoggedIn) => {
    if (isLoggedIn) {
      // toaster.success("LoggedIn Successfully")
      return true;
    } else {
      toaster.error("Login First")
      router.navigate(['/auth/login']);
      return false;
    }

  })
  return true;
};
