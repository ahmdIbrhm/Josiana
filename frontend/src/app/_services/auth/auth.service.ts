import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService, private router: Router) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email: email,
        password: password,
      },
      httpOptions
    );
  }

  register(name: string, email: string, password: string, role: string, phoneNumber: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        name,
        email,
        password,
        role,
        phoneNumber
      },
      httpOptions
    );
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['/login'])
  }

}
