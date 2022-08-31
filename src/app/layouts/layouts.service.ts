import { Routes, Route } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export class MainLayout {
  /**
   * Creates routes using the main layout component.
   * @param routes The routes to add.
   * @return The new route using main layout as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: MainLayoutComponent,
      children: routes,
      // Reuse MainLayoutComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}

