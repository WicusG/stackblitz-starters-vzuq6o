import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }