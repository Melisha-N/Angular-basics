import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContainerComponent } from './component/container/container.component';
import { FormsModule } from '@angular/forms';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { NgswitchdemoComponent } from './ngswitchdemo/ngswitchdemo.component';
import { NgclassdemoComponent } from './ngclassdemo/ngclassdemo.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { NumbersortPipe } from './pipesdemo/numbersort.pipe';
import { NamesortPipe } from './pipesdemo/namesort.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { NgstyledemoComponent } from './ngstyledemo/ngstyledemo.component';
import { CalculatorSIComponent } from './calculator-si/calculator-si.component';
import { TemplatereferencevariabledemoComponent } from './templatereferencevariabledemo/templatereferencevariabledemo.component';
import { AgecalculatePipe } from './pipesdemo/agecalculate.pipe';
import { ParentComponent } from './datapassing/parent/parent.component';
import { ChildComponent } from './datapassing/child/child.component';
import { CountriesComponent } from './countries/countries.component';
import { from } from 'rxjs';
import { ViewComponent } from './routingcomponent/view/view.component';
import { DashboardComponent } from './routingcomponent/dashboard/dashboard.component';
import { EmployeeListComponent } from './routingcomponent/employee-list/employee-list.component';
import { PageNotFoundComponent } from './routingcomponent/page-not-found/page-not-found.component';
import { HomeComponent } from './routingcomponent/home/home.component';
import { MyAppRouteRoutingModule } from './my-app-route/my-app-route-routing.module';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NgfordemoComponent,
    NgifdemoComponent,
    NgswitchdemoComponent,
    NgclassdemoComponent,
    TogglebuttonComponent,
    NumbersortPipe,
    NamesortPipe,
    HighlightDirective,
    NgstyledemoComponent,
    CalculatorSIComponent,
    TemplatereferencevariabledemoComponent,
    AgecalculatePipe,
    ParentComponent,
    ChildComponent,
    CountriesComponent,
    DashboardComponent,
    RegistrationComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyAppRouteRoutingModule,
    // RouterModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

