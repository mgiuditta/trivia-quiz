import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {ResultService} from "@core/services/result.service";

export const quizResultGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const resultService: ResultService = inject(ResultService);
  if (resultService.isQuizSubmitted) {
    return true;
  } else {
    const router: Router = inject(Router);
    router.navigate(['/']);
    return false;
  }
};

