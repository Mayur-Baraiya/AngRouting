import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../../Views/Home/app.component';
import { AboutUsComponent } from '../../Views/AboutUs/aboutus.component';
import { ContactUsComponent } from '../../Views/ContactUs/contactus.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '*', component: AppComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'contactus', component: ContactUsComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);