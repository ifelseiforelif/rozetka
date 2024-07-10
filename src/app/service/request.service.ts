import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get<any>(url); // Отрегулируйте тип ответа по мере необходимости
  }
}
