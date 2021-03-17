import { Component } from '@angular/core';
import { CounterLibService } from 'counter-lib';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  constructor(public counterLibService: CounterLibService) {}

  increment(): void {
    this.counterLibService.increment();
  }
}
