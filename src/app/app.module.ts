import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    
    AppRoutingModule,  // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ] 
})
export class AppModule { }