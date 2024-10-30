import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MicroFrontend2Module } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MicroFrontend2Module)
  .catch(err => console.error(err));
