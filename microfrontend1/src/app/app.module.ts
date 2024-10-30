
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MicroFrontend1RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, MicroFrontend1RoutingModule],
  bootstrap:[AppComponent]
})
export class MicroFrontend1Module {}
