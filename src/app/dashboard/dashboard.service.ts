import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly url = 'https://santander-dev-week-dio.herokuapp.com'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    const resource = `${this.url}/stock`;
    const response = this.http.get<Stock[]>(resource).toPromise();
    return response;
  }
}
