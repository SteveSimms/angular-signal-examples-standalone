import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showNavBar = signal(false);

  toggleNavbar() {
    this.showNavBar.update(val => !val);
  }
}
