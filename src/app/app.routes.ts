import { Routes } from '@angular/router';
import { ReactContainerComponent } from './react-container/react-container.component';

export const routes: Routes = [
    { path: 'react', component: ReactContainerComponent },
    { path: '**', redirectTo: '/' }
];
