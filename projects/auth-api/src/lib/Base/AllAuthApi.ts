import { Observable } from "rxjs";
import { Iauth } from "../interface/iauth";

export abstract class AllAuthApi {
       
    abstract login(data:Iauth):Observable<Iauth>;
    abstract register(data:Iauth):Observable<Iauth>;
    abstract changePassword(data:Iauth):Observable<Iauth>;
    abstract deleteAccount(data:Iauth):Observable<Iauth>;
    abstract editProfile(data:Iauth):Observable<Iauth>;
    abstract logOut(data:Iauth):Observable<Iauth>;
    abstract loggedUserInfo(data:Iauth):Observable<Iauth>;
    abstract forgotPassword(data:Iauth):Observable<Iauth>;
    abstract verifyCode(data:Iauth):Observable<Iauth>;
    abstract resetPass(data:Iauth):Observable<Iauth>;

    
}