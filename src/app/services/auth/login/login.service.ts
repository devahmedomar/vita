import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient: HttpClient) { }
    userDataa: any;
  saveUserData() {
    if (localStorage.getItem('eToken') != null) {
      let encodedToken: any = localStorage.getItem('eToken')
      let decodecTken = jwtDecode(encodedToken);
      this.userDataa = decodecTken;
      console.log(decodecTken);
    }
  }
  apiUrl: string = environment.baseUrl + 'v2/auth/login';

  login(userData:object):Observable<any> {
   return this._HttpClient.post(this.apiUrl , userData)
  }
}
  function jwtDecode(encodedToken: any) {
    throw new Error('Function not implemented.');
  }

