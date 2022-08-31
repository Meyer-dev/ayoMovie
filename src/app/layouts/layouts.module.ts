
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//TODO:see if all above modules are needed.

@NgModule({
  imports: [
  CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommonLayoutComponent,
    MainLayoutComponent,
  ]
})
export class LayoutsModule {
}
