import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
      children: [
      {  path: '', redirectTo: 'search', pathMatch: 'full'},
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module').then((mod) => mod.SearchModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
