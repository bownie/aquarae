import { Injectable } from '@angular/core';
import { Routes, Resolve, RouterModule, CanDeactivate } from '@angular/router';
import { IrrigationComponent } from './irrigation/irrigation.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { VineyardComponent } from './vineyard/vineyard.component';

//import { Observable } from 'rxjs/Observable';
//

// Activate AuthGuard for every route and ensure that we fetch the authorisatons
// if they are out of date.  Need a way to invalidate these..
//
const appRoutes: Routes = [
    {
        path: 'irrigation',
        component: IrrigationComponent
    },
    {
        path: 'vineyard',
        component: VineyardComponent
    },
    {
        path: 'agriculture',
        component: AgricultureComponent
    },
    // otherwise redirect to login screen
    //
    {
        path: '**', redirectTo: 'login'
    }
];

export const routing = RouterModule.forRoot(appRoutes);
