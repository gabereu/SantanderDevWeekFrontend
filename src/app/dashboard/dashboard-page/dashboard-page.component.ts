import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  public stocks: Stock[] = [];

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.loadStocks();
  }

  private async loadStocks(): Promise<void>{
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);

  }
}
