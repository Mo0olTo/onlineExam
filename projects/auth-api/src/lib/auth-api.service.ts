import { Router } from '@angular/router';
import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AllAuthApi } from './Base/AllAuthApi';
import { AuthEndPoints } from './enums/authEndPoint';
import { Iauth } from './interface/iauth';
import { IUsers } from './interface/iusers';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AllAuthApi  {

  httpClient=inject(HttpClient)
  authApiAdaptorService=inject(AuthApiAdaptorService)
  router=inject(Router)

 
  
  userData:Iauth[]=[]

    login(data: Iauth): Observable<Iauth> {
          return this.httpClient.post<Iauth>(AuthEndPoints.LOGIN,data).pipe(map(res=> this.authApiAdaptorService.adapt(res)))
      }


    register(data: Iauth): Observable<Iauth> {
      return this.httpClient.post<Iauth>(AuthEndPoints.REGISTER,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
      }


   changePassword(data: Iauth): Observable<Iauth> {
    return this.httpClient.patch<Iauth>(AuthEndPoints.CHANGEPASSWORD,data
    ).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
      
  }

   deleteAccount(): Observable<Iauth> {
      return this.httpClient.delete<Iauth>(AuthEndPoints.DELETEACCOUNT).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
  }


   editProfile(data:Iauth):Observable<Iauth>{
    return this.httpClient.put<Iauth>(AuthEndPoints.EDITPROFILE,data).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
   }


   logOut(): Observable<Iauth> {
    return this.httpClient.get<Iauth>(AuthEndPoints.LOGOUT).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
       
   }

    loggedUserInfo(): Observable<Iauth> {
      return this.httpClient.get<Iauth>(AuthEndPoints.LOGGEDUSERINFO).pipe(map(res=>this.authApiAdaptorService.adapt(res)))
       
   }

  forgotPassword(data: IUsers): Observable<any> {
       return this.httpClient.post(AuthEndPoints.FORGOTPASS,data)
   }
      

    verifyCode(data: IUsers): Observable<Iauth> {
       return this.httpClient.post<Iauth>(AuthEndPoints.VERIFYCODE,data)
   }

   resetPass(data: IUsers): Observable<Iauth> {
    return this.httpClient.put<Iauth>(AuthEndPoints.RESETPASS,data)
      
   }

  saveUserData(): void {
          if (localStorage.getItem('onlineExamToken')!==null) {
            this.userData= jwtDecode(localStorage.getItem('onlineExamToken')!)
            console.log(this.userData);
            
            
          }
    }




  

  }

