import { bootstrapApplication }        from '@angular/platform-browser';
import { provideRouter }               from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes }       from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),          // 🛣️  Ruteo
    provideHttpClient(withFetch())  // 🌐  HttpClient basado en fetch
  ]
}).catch(err => console.error(err));
