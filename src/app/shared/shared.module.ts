import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    RouterModule
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
