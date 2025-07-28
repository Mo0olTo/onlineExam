import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AllAuthApi } from './Base/AllAuthApi';
import { AuthEndPoints } from './enums/authEndPoint';
import { Iauth } from './interface/iauth';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AllAuthApi  {

  httpClient=inject(HttpClient)
  authApiAdaptorService=inject(AuthApiAdaptorService)

 
  myToken:any = localStorage.getItem("userToken")

    login(data: Iauth): Observable<Iauth> {
          return this.httpClient.post(AuthEndPoints.LOGIN,data).pipe(map(res=> this.authApiAdaptorService.adapt(res)))
      }


    register(data: Iauth): Observable<Iauth> {
      return this.httpClient.post(AuthEndPoints.REGISTER,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
      }


   changePassword(data: Iauth): Observable<Iauth> {
    return this.httpClient.patch(AuthEndPoints.CHANGEPASSWORD,data
    ).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
      
  }

   deleteAccount(): Observable<Iauth> {
      return this.httpClient.delete(AuthEndPoints.DELETEACCOUNT).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
  }


   editProfile(data:Iauth):Observable<Iauth>{
    return this.httpClient.put(AuthEndPoints.EDITPROFILE,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
   }


   logOut(): Observable<Iauth> {
    return this.httpClient.get(AuthEndPoints.LOGOUT).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
       
   }

    loggedUserInfo(): Observable<Iauth> {
      return this.httpClient.get(AuthEndPoints.LOGGEDUSERINFO).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
       
   }

  forgotPassword(data: Iauth): Observable<Iauth> {
       return this.httpClient.post(AuthEndPoints.FORGOTPASS,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
   }
      

    verifyCode(data: Iauth): Observable<Iauth> {
       return this.httpClient.post(AuthEndPoints.VERIFYCODE,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
   }

   resetPass(data: Iauth): Observable<Iauth> {
    return this.httpClient.put(AuthEndPoints.RESETPASS,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
       
   }



  }

