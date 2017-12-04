import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
     CommonModule
  ],
  declarations: []
})
export class SharedModule { }
