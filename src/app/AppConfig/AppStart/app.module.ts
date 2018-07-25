import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../../Views/Home/app.component';
import { AboutUsComponent } from '../../Views/AboutUs/aboutus.component';
import { ContactUsComponent } from '../../Views/ContactUs/contactus.component';

import { AppLayout } from '../Layout/app.layout';
import { Routing } from '../Router/router.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    AppLayout

  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppLayout]
})
export class AppModule { }
