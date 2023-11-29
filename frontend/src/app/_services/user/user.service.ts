import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetNgoDTO } from 'src/app/_models/user';

const API_URL = 'http://localhost:8080/users/ngo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getAllNgos(): Observable<GetNgoDTO[]> {
    return this.http.get<GetNgoDTO[]>(API_URL, httpOptions );
  }
}
