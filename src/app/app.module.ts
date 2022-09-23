import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxGridModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridFilterDataComponent } from './grid-filter-data/grid-filter-data.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { IgxInputGroupModule, IgxToastModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

import {
  IgxDropDownModule,
  IgxButtonModule,
  IgxToggleModule,
  IgxForOfModule,
  IgxMaskModule,
  IgxIconModule,
  IgxRippleModule,
  IgxSelectModule,
} from 'igniteui-angular';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, GridFilterDataComponent, SimpleFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxDropDownModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxForOfModule,
    IgxMaskModule,
    IgxRippleModule,
    IgxIconModule,
    IgxSelectModule,
    FormsModule,
    ReactiveFormsModule,
    IgxToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
