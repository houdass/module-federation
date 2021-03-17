import { Component } from '@angular/core';
import {CounterLibService} from 'counter-lib';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {

  constructor(public counterLibService: CounterLibService) {}

  increment(): void {
    this.counterLibService.increment();
  }

}
