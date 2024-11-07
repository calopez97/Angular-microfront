import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { 
    path: 'microfrontend1', 
    loadChildren: async () => {
      const microfrontend1 = await (window as any).microfrontend1.get('./Module');
      console.log('microfrontend1', microfrontend1());
      
      return microfrontend1().MicroFrontend1Module;
    },
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/microfrontend1', pathMatch: 'full' },
  { path: '**', redirectTo: '/microfrontend1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // useHash puede ayudar si hay problemas de rutas en el navegador
  exports: [RouterModule]
})
export class AppRoutingModule {}
