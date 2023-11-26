import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('admin') === 'true';
};
