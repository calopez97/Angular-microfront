import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test/test.component';


const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta ptras rutas, si las hay
  { path: 'test', component: TestComponent }, // Ruta ptras rutas, si las hay
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroFrontend1RoutingModule {}