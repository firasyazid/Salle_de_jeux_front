import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false;  

  constructor(private http: HttpClient,
    private token: LocalstorageService,
    private router: Router
    ) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`https://goodgames94.azurewebsites.net/api/v1/users/login`, { email, password });
  }
  logout() {

    this.token.removeToken();
    this.router.navigate(['/']);
  }

  setAdminStatus(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  getAdminStatus(): boolean {
    return this.isAdmin;
  }

  
}
