import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class UserService {


  constructor(private http: HttpClient) {}


  public signIn(user: IUser): Observable<any>{

    return this.http.post<any>(`${base_url} /users/`, user);

  }

  //TODO
  //problemas de cors





}
