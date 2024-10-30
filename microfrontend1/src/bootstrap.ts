import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MicroFrontend1Module } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MicroFrontend1Module)
  .catch(err => console.error(err));
