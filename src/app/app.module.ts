import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
