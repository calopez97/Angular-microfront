import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'microfrontend1', 
    loadChildren: () => import('microfrontend1/Module').then(m => m.MicroFrontend1Module) 
  },
  { path: '', redirectTo: '/microfrontend1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // useHash puede ayudar si hay problemas de rutas en el navegador
  exports: [RouterModule]
})
export class AppRoutingModule {}
