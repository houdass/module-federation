import { Component } from '@angular/core';
import { CounterLibService } from 'counter-lib';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
})
export class TrackingComponent {
  constructor(public counterLibService: CounterLibService) {}

  increment(): void {
    this.counterLibService.increment();
  }
}
