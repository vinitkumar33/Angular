import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
       <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Vinit Template'

}
/*import { Component } from '@angular/core';

Angular component = Template(View layout created with html)
  + Class (Code supporting view created with typescript. Class contains properties ie data and methods+
  + Metadata (Extra data for angular. It is defined with decorator. Decorator is a function which adds
  metadata to a class, its property or its method arguments).

  Root component of application is called AppComponent.


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}*/
