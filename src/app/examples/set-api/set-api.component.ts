import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-set-api',
  // templateUrl: './set-api.component.html',
  template: `<div class="container mt-4 mb-4">
  <div class="card">
    <div class="card-header">
      Using set method to update the number type value
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ num() }}</h5>
      <p class="card-text"></p>
      <div class="btn-row">
        <a (click)="addOne()" class="btn btn-primary">Add One</a>
        <a (click)="reset()" class="btn btn-primary">Reset</a>
        <a (click)="minusOne()" class="btn btn-primary">Minus One</a>
      </div>
    </div>
  </div>

  <div class="card mt-5">
    <div class="card-header">
      Using set method to update the string type value
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ name() }}</h5>
      <p class="card-text"></p>
      <div class="btn-row">
        <a (click)="updateName()" class="btn btn-primary">Update name</a>
        <a (click)="resetName()" class="btn btn-primary">Reset name</a>
      </div>
    </div>
  </div>

  <div class="card mt-5">
    <div class="card-header">
      Using set method to update the boolean type value
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ isAdminUser() ? "Admin User" : "General User" }}
      </h5>
      <p class="card-text"></p>
      <div class="btn-row">
        <a (click)="updateToAdminUser()" class="btn btn-primary"
          >Update to Admin User</a
        >
        <a (click)="updateToUser()" class="btn btn-primary"
          >Update to General User</a
        >
      </div>
    </div>
  </div>
</div>
`,
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
