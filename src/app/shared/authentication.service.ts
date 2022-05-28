import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";



interface Token {
  exp: number;
  user: {
    id: string;
    helper: string;
  };
}

@Injectable()

export class AuthenticationService {

  private api : string = 'http://nachhilfe22.s1910456032.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) {  }

  login(email:string, password:string) : Observable<any>{
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public getCurrentUserId () {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }


  public getCurrentUserRole() {
    return Number.parseInt(<string>sessionStorage.getItem("userHelper"));
  }


  public setSessionStorage(token: string) {
    // console.log(jwtDecode(token));
    const decodedToken = jwt_decode(token) as Token;
    // const decodedToken = jwtDecode(token) as Token;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
    sessionStorage.setItem("userHelper", decodedToken.user.helper);
    console.log("nach der fehlermeldung2");
  }



  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    console.log("Logged out");
  }

  public isLoggedIn() {
    if(sessionStorage.getItem("token")) {
      let token : string = <string> sessionStorage.getItem("token");
      console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if(expirationDate < new Date()) {
        sessionStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public userIsHelper() {
    if(sessionStorage.getItem("token")) {
      let token : string = <string> sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      return decodedToken.user.helper === "helper";

    } else {
      return false;
    }

}}
