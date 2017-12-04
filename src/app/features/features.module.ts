import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';

import { RoutesComponent } from './routes/routes.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SharedModule } from '../shared.module';  



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'purchase-order',
        component: DashboardComponent,
        children: [
          {
            path: '', component: PurchaseOrderComponent
          }
        ]
      },
      {
        path: 'purchase-orders/:filter',
        component: DashboardComponent,
        children: [
          {
            path: '', component: PurchaseOrdersComponent
          }
        ]
      },
      {
        path: 'vendors',
        component: DashboardComponent,
        children: [
          {
            path: '', component: VendorsComponent
          }
        ]
      },
      {
        path: 'vendor',
        component: DashboardComponent,
        children: [
          {
            path: '', component: VendorComponent
          }
        ]
      },
      {
        path: 'routes',
        component: DashboardComponent,
        children: [
          {
            path: '', component: RoutesComponent
          }
        ]
      }
      ])
  ],
  declarations: [DashboardComponent, PurchaseOrderComponent, PurchaseOrdersComponent, RoutesComponent, VendorComponent, VendorsComponent]
})
export class FeaturesModule { }
