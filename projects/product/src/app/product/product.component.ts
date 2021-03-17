import { Component } from '@angular/core';
import { CounterLibService } from 'counter-lib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  constructor(public counterLibService: CounterLibService) {}

  increment(): void {
    this.counterLibService.increment();
  }
}
