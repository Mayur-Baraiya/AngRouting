import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
       <div>

          <ul class='nav nav-tabs'>
          <li><a [routerLink]="['/']">Home</a></li>
          <li><a [routerLink]="['/aboutus']">About Us</a></li>
          <li><a [routerLink]="['/contactus']">Contact Us</a></li>
          </ul>

       </div>
       <router-outlet></router-outlet>
    `
})

export class AppLayout {
    title: string;

    constructor() {
        this.title = 'My Website';
    }

}