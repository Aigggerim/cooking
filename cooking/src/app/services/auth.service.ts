import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../assets/interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private api = 'api'
  private headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json '})
  }

  Register(user): Observable<User> {
    return this.http.post<User>(this.api+'register', user, this.headers)
  }

  Login(user): Observable<User> {
    return this.http.post<User>(this.api+'login', user, this.headers)
  }
}
