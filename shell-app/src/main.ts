import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:4201/remoteEntry.js', 'microfrontend1'),
])
  .then(() => import('./bootstrap'))
  .catch(err => console.error('Error al cargar los remotes', err));