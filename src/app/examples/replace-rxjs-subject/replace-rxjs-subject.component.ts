import { Component, inject, Signal } from '@angular/core';
import { HelperService } from './helper.service';
import { User } from '../mutate-api/client.interface';

@Component({
  selector: 'app-replace-rxjs-subject',
  templateUrl: './replace-rxjs-subject.component.html',
  styleUrls: ['./replace-rxjs-subject.component.css'],
})
export class ReplaceRxjsSubjectComponent {
  helperService = inject(HelperService);
  user: Signal<User> = this.helperService.user;
}
