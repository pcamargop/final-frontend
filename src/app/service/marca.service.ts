import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarcaI } from '../Models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  api_uri_nodejs = 'http://localhost:3008';

  api_uri_django = 'http://localhost:4000';

  base_path = `${this.api_uri_nodejs}/marcas/`;

  constructor(private http: HttpClient) {}

  getAllmarca(): Observable<{ marca: MarcaI[] }> {
    return this.http.get<{ marca: MarcaI[] }>(this.base_path);
  }

  getOnemarca(id: number): Observable<{ marca: MarcaI[] }> {
    return this.http.get<{ marca: MarcaI[] }>(`${this.base_path}${id}`);
  }

  createmarca(data: any): Observable<MarcaI> {
    return this.http.post<MarcaI>(this.base_path, data);
  }

  updatemarca(id: number, data: any): Observable<MarcaI>{
    console.log(id, data);
    return this.http.put<MarcaI>(`${this.base_path}${id}`, data);
  }

  deletemarca(id: number): Observable<MarcaI> {
    return this.http.delete<MarcaI>(`${this.base_path}${id}`);
  }
}
