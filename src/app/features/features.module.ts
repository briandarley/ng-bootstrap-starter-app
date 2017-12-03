import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
       path: 'dashboard', component: DashboardComponent
        
      }])
  ],
  declarations: [DashboardComponent]
})
export class FeaturesModule { }
