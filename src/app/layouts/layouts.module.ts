
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
  CommonModule,
    RouterModule,
    SharedModule
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
