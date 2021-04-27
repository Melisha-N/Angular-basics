import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppRouteRoutingModule } from './my-app-route-routing.module';
import { EmployeeListComponent } from '../routingcomponent/employee-list/employee-list.component';
import { HomeComponent } from '../routingcomponent/home/home.component';
import { PageNotFoundComponent } from '../routingcomponent/page-not-found/page-not-found.component';
import { ViewComponent } from '../routingcomponent/view/view.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyAppRouteRoutingModule
  ]
})
export class MyAppRouteModule { }
