import { Component } from '@angular/core';
import { CounterLibService } from 'counter-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public counterLibService: CounterLibService) {}

  increment(): void {
    this.counterLibService.increment();
  }
}
