import { Component, signal, WritableSignal, effect } from '@angular/core';
import { User } from '../mutate-api/client.interface';

@Component({
  selector: 'app-update-api',
  templateUrl: './update-api.component.html',
  styleUrls: ['./update-api.component.css'],
})
export class UpdateApiComponent {
  user: WritableSignal<User> = signal<User>({
    firstName: 'Ranbir',
    lastName: 'Singh',
    email: 'xyz@gmail.com',
    isAdminUser: false,
    phoneNumber: '91123456789',
    userId: 1,
  });

  num: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      console.log(this.user());
    });
  }

  updateEmail() {
    this.user.update((user) => {
      user.email = 'abc@gmail.com';
      return user;
    });
  }

  reset() {
    this.num.set(0);
  }

  addOne() {
    this.num.update((num) => num + 1);
  }

  minusOne() {
    this.num.update((num) => num - 1);
  }
}
