import { Injectable, WritableSignal, signal } from '@angular/core';
import { User } from '../mutate-api/client.interface';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  user: WritableSignal<User> = signal<User>({
    firstName: 'Ranbir',
    lastName: 'Singh',
    email: 'xyz@gmail.com',
    isAdminUser: false,
    phoneNumber: '91123456789',
    userId: 1,
  });

  updateUserRole() {
    this.user.mutate((user) => {
      user.isAdminUser = true;
    });
  }

  updateUserEmail() {
    this.user.mutate((user) => {
      user.email = 'abc123@gmail.com';
    });
  }
}
