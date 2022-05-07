import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisteringComponent} from "./registring/registering.component";

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxDadataModule } from '@kolkov/ngx-dadata';

@NgModule({
    declarations: [
        AppComponent,
        RegisteringComponent,

    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    NgxDadataModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
