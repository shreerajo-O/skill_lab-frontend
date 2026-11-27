import { Component } from '@angular/core';

@Component({
  selector: 'app-gold',
  templateUrl: './gold-calc.component.html',
  styleUrls: ['./gold-calc.component.css']
})
export class GoldCalcComponent {

  purity = 22;
  weight = 1;
  rate = 7000;
  makingCharges = 10;

  get goldPrice(): number {
    return this.weight * this.rate;
  }

  get makingCost(): number {
    return this.goldPrice * this.makingCharges / 100;
  }

  get gst(): number {
    return (this.goldPrice + this.makingCost) * 0.03;
  }

  get totalPrice(): number {
    return this.goldPrice + this.makingCost + this.gst;
  }

}
