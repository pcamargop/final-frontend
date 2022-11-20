import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CocheI } from '../Models/coche';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
  api_uri_nodejs = 'http://localhost:3008';

  api_uri_django = 'http://localhost:4000';

  base_path = `${this.api_uri_nodejs}/coches/`;

  constructor(private http: HttpClient) {}

  getAllcoche(): Observable<{ coche: CocheI[] }> {
    return this.http.get<{ coche: CocheI[] }>(this.base_path);
  }

  getOnecoche(id: number): Observable<{ coche: CocheI[] }> {
    return this.http.get<{ coche: CocheI[] }>(`${this.base_path}${id}`);
  }

  createcoche(data: any): Observable<CocheI> {
    return this.http.post<CocheI>(this.base_path, data);
  }

  updatecoche(id: number, data: any): Observable<CocheI> {
    console.log(id, data);
    return this.http.put<CocheI>(`${this.base_path}${id}`, data);
  }

  deletecoche(id: number): Observable<CocheI> {
    return this.http.delete<CocheI>(`${this.base_path}${id}`);
  }
}
