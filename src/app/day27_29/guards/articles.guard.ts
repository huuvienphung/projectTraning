import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckDeactivate } from '../articles/article-detail/check-deactivate';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesGuard
  implements
    CanActivate,
    CanActivateChild,
    CanLoad,
    CanDeactivate<CheckDeactivate> {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.currentUser.pipe(map((user) => !!user));
    // return of(false);
    // kiểm tra một route có quyền truy cập đến ko
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const targetSlug = childRoute.params.slug;
    if (!targetSlug) {
      return of(false);
    }
    // console.log(targetSlug);

    return this.authService.currentUser.pipe(
      map((user) => user.articlecs.includes(targetSlug))
    );
    // kiểm tra nhiều route con có thể truy cập đến hay ko
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.currentUser.pipe(map((user) => !!user));
    // return of(true);
    // giống như canActive nhưng tốt hơn là nếu ko thể truy cập đến sẽ ko tải module đó về
  }
  canDeactivate(
    component: CheckDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    return component.checkDeactivate(currentRoute, currentState, nextState);
  }
}
