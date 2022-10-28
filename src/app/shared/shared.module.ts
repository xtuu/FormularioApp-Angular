import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
