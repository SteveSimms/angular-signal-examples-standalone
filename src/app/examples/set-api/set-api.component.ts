import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-set-api',
  templateUrl: './set-api.component.html',
  styleUrls: ['./set-api.component.css'],
})
export class SetApiComponent {
  /** num signal start  */

  num: WritableSignal<number> = signal(0);

  reset() {
    this.num.set(0);
  }

  addOne() {
    this.num.set(this.num() + 1);
  }

  minusOne() {
    this.num.set(this.num() - 1);
  }

  /** name signal start  */

  name: WritableSignal<string> = signal('Test');

  updateName() {
    this.name.set('Test123');
  }

  resetName() {
    this.name.set('Test');
  }

  /** isAdminUser signal start*/

  isAdminUser: WritableSignal<boolean> = signal(false);

  updateToAdminUser() {
    this.isAdminUser.set(true);
  }

  updateToUser() {
    this.isAdminUser.set(false);
  }
}
