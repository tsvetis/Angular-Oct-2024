import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};

//  Feature            Zone JS         | Signals
///////////////////////////////////////////////////////////////////////////////////
// reactity Type:      global          | on spot
// trigger mechanism:  on async event  | on update of the signal
// component update:   re-renders the  | updates only component on the right spot
//              whole component tree
// performace:          less-performant| more effiecent
// predicatable:      less-predicatble | more predictable (more control as devs)
//                 (zone.js)
// state management:   observables,    | they don't need these (local component state)
//                   services, ngrx
// Best Use Case:    small to          | High-performance, with good specialist
//                     medium apps          in state management
