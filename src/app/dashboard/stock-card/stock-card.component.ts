import Stock from 'src/app/shared/models/stock-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  public stock = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string{
    const localizedVariationString = Math.abs(this.stock.variation).toLocaleString(undefined, {minimumFractionDigits: 1});
    const signal = this.stock.variation > 0 ? '+' : '-';
    return `${signal} ${localizedVariationString}%`;
  }

}
