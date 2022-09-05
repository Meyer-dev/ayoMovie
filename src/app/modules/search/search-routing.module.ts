import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayout } from 'src/app/layouts/layouts.service';
import { SearchComponent } from './search.component';

 const routes: Routes = [
    MainLayout.childRoutes([
     { path: '', redirectTo: 'search', pathMatch: 'full' },
     { path: 'search', component: SearchComponent},
    ])
 ];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
   providers: []
 })
 export class SearchRoutingModule { }

