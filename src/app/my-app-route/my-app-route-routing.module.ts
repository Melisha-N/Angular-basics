import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../routingcomponent/dashboard/dashboard.component';
import { EmployeeListComponent } from '../routingcomponent/employee-list/employee-list.component';
import { HomeComponent } from '../routingcomponent/home/home.component';
import { PageNotFoundComponent } from '../routingcomponent/page-not-found/page-not-found.component';
import { ViewComponent } from '../routingcomponent/view/view.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'empList', component:EmployeeListComponent},
  {path:'view', component:ViewComponent},
  {path:'reg', component:RegistrationComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // changed from imports: [RouterModule.forChild(routes)]
  exports: [RouterModule]
})
export class MyAppRouteRoutingModule { }
export const routeComponents=[
  ViewComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  HomeComponent,
  RegistrationComponent
]


