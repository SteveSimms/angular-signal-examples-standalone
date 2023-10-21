import { Component, inject, Signal } from '@angular/core';
import { HelperService } from '../../helper.service';
import { User } from '../../../../examples/mutate-api/client.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  helperService = inject(HelperService);
  user: Signal<User> = this.helperService.user;
}
