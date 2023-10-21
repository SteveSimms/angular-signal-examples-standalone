import { Component, signal, WritableSignal, effect } from '@angular/core';
import { User } from './client.interface';

@Component({
  selector: 'app-mutate-api',
  templateUrl: './mutate-api.component.html',
  styleUrls: ['./mutate-api.component.css'],
})
export class MutateApiComponent {
  user: WritableSignal<User> = signal<User>({
    firstName: 'Ranbir',
    lastName: 'Singh',
    email: 'xyz@gmail.com',
    isAdminUser: false,
    phoneNumber: '91123456789',
    userId: 1,
  });

  updateEmail() {
    this.user.mutate((user) => {
      user.email = 'abc@gmail.com';
    });
  }
}
