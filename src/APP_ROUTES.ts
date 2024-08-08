import { Routes } from '@angular/router';
import { SliderComponent } from './app/slider/slider.component';

export const appRoutes: Routes = [
    
    {
        path: '/home',
        component: SliderComponent
    },

    // Option 1: Lazy Loading another Routing Config
   /* {
        path: 'flight-booking',
        loadChildren: () =>
            import('')
                .then(m => m.FLIGHT_BOOKING_ROUTES)
    },

    // Option 2: Directly Lazy Loading a Standalone Component
    {
        path: 'next-flight',
        loadComponent: () => 
            import('./next-flight/next-flight.component')
                .then(m => m.NextFlightComponent)
    },
    [...]*/
];