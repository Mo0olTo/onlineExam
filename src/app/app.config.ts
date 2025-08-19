import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { subjectReducer } from './store/subjects.reducer';
import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { examsReducer } from './store/Exams/exams.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor])),
    importProvidersFrom(NgxSpinnerModule),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    provideToastr(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    provideClientHydration(withEventReplay()),
    
    provideStore(
        {
            subjects:subjectReducer,
            Exams :examsReducer
        }
    )

]
};
