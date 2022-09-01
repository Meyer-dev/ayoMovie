import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

//TODO:see if all above modules are needed.
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SearchRoutingModule
    //TODO:see if feature modules should have all these modules, check layouts module. place in shared modeule?
  ],
  declarations: [
    SearchComponent,
  ]
})
export class SearchModule {
}