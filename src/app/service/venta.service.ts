import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentaI } from '../Models/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  api_uri_nodejs = 'http://localhost:3008';

  api_uri_django = 'http://localhost:4000';

  base_path = `${this.api_uri_nodejs}/ventas/`;

  constructor(private http: HttpClient) {}

  getAllventa(): Observable<{ venta: VentaI[] }> {
    return this.http.get<{ venta: VentaI[] }>(this.base_path);
  }

  getOneventa(id: number): Observable<{ venta: VentaI[] }> {
    return this.http.get<{ venta: VentaI[] }>(`${this.base_path}${id}`);
  }

  createventa(data: any): Observable<VentaI> {
    return this.http.post<VentaI>(this.base_path, data);
  }

  updateventa(id: number, data: any): Observable<VentaI>{
    console.log(id, data);
    return this.http.put<VentaI>(`${this.base_path}${id}`, data);
  }

  deleteventa(id: number): Observable<VentaI> {
    return this.http.delete<VentaI>(`${this.base_path}${id}`);
  }
}
