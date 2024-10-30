
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  bootstrap:[AppComponent]
})
export class MicroFrontend1Module {}
