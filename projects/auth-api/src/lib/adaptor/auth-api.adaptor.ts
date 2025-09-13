import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import { Iauth } from '../interface/iauth';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdaptorService implements Adaptor {

  constructor() { }

  adapt(data:any):any{
    return {
      message:data.message ,
      token:data.token ,
      email:data.user.email,
     
      role:data.user.role,
      username:data.user.username ,
      firstname:data.user.firstName ,
      lastname:data.user.lastName ,
      info:data.info,
      status:data.status

    }
  }

  adapt2(data:any):any{
    return{
       email:data.email,
    }
  }

}
