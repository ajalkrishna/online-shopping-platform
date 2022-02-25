import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  // userRegistration
  userRegistration(userObj):Observable<any>{
    return this.hc.post('http://localhost:5000/user/create-user',userObj)
  }
  // userLogin
  loginUser(loginObj):Observable<any>{
    return this.hc.post('http://localhost:5000/user/user-login',loginObj)
  }
}
