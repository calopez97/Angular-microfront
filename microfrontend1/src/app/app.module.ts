
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MicroFrontend1RoutingModule } from './app-routing.module';
import { TestComponent } from './test-component/test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, CommonModule, MicroFrontend1RoutingModule],
  bootstrap:[AppComponent, TestComponent]
})
export class MicroFrontend1Module {}
