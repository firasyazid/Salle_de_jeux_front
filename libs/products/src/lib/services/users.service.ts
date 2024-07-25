import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { Session } from '../models/session';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  private baseUrl = 'https://goodgames94.azurewebsites.net/api/v1/session';
  private baseUrl2 = 'http://localhost:3000/api/v1/session';



  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://goodgames94.azurewebsites.net/api/v1/users/');
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`https://goodgames94.azurewebsites.net/api/v1/users/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('https://goodgames94.azurewebsites.net/api/v1/users/', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`https://goodgames94.azurewebsites.net/api/v1/users/${user.id}`, user);
  }

  deleteUser(userId: string): Observable<object> {
    return this.http.delete<object>(`https://goodgames94.azurewebsites.net/api/v1/users/${userId}`);

  }

  getUsersCount(): Observable<number> {
    return this.http
      .get<number>(`https://goodgames94.azurewebsites.net/api/v1/users/get/count`)
      .pipe(map((objectValue: any) => objectValue.userCount));
  }

  getSession(): Observable<Session[]> {
    return this.http.get<Session[]>('https://goodgames94.azurewebsites.net/api/v1/session/display');
  }

  
   getSessionById(sessionId: string): Observable<Session> {
    return this.http.get<Session>(`https://goodgames94.azurewebsites.net/api/v1/session/display/${sessionId}`);
  }

  getSessionsSum(): Observable<number> {
    return this.http
      .get<number>(`https://goodgames94.azurewebsites.net/api/v1/session/sum`)
      .pipe(map((objectValue: any) => objectValue.totalSum));
  }

  
  getSessionsSumMonth(): Observable<number> {
    return this.http
      .get<number>(`https://goodgames94.azurewebsites.net/api/v1/session/sumMonth`)
      .pipe(map((objectValue: any) => objectValue.totalSum));
  }


  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>('https://goodgames94.azurewebsites.net/api/v1/session/add', session);
  }


 
  getLastSession(): Observable<Session> {
     return this.http.get<Session>(('https://goodgames94.azurewebsites.net/api/v1/session/last-session'));
   }

   updateSession(sess: Session): Observable<Session> {
    return this.http.put<Session>(`https://goodgames94.azurewebsites.net/api/v1/session/${sess.id}`, sess);
  }
  

  incrementCompteur(sessionId: string, postName: string): Observable<any> {
    const url = `${this.baseUrl}/${sessionId}/postes/${postName}/increment`;
    return this.http.put(url, {});
  }

  decrementCompteur(sessionId: string, postName: string): Observable<any> {
    const url = `${this.baseUrl}/${sessionId}/postes/${postName}/decrement`;
    return this.http.put(url, {});
  }

  getStat(): Observable<any> {
    return this.http.get<any>('https://goodgames94.azurewebsites.net/api/v1/session/sum-by-day');
  }
 

  getSommeByMonth() {  
    return this.http.get('https://goodgames94.azurewebsites.net/api/v1/session/sumMonth2');
  }
 
  incrementCompteur2(sessionId: string, postName: string): Observable<any> {
    const url = `${this.baseUrl}/${sessionId}/postes/${postName}/incrementt`;
    return this.http.put(url, {});
  }


  }

 