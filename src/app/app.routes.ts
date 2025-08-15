import { Routes } from '@angular/router';

import { AuthlayoutComponent } from './core/layouts/authlayout/authlayout.component';
import { SignInComponent } from './feature/pages/sign-in/sign-in.component';
import { SignUpComponent } from './feature/pages/sign-up/sign-up.component';
import { ForgetPassComponent } from './feature/pages/forget-pass/forget-pass.component';
import { MainlayoutComponent } from './core/layouts/mainlayout/mainlayout.component';
import { authGuardGuard } from './core/Guards/auth-guard.guard';
import { loggedGuard } from './core/Guards/logged.guard';


export const routes: Routes = [

    {path:"" , redirectTo:'dashBoard' , pathMatch:'full'} ,

    {path:'' , component:AuthlayoutComponent ,canActivate:[(loggedGuard)] , title:'auth' ,children:[
        {path:'signin' , component:SignInComponent , title:'Sign In'},
        {path:'signup' , component:SignUpComponent , title:'Sign up'},
        {path:'forgetPass' , component:ForgetPassComponent , title:'ForgetPass'},

        
    ]} ,


    { path:'' , component:MainlayoutComponent , canActivate:[(authGuardGuard)]   , title:'main' , children:[

        {path:'dashBoard', loadComponent:()=> import('./feature/pages/dash-board/dash-board.component').then((c)=>c.DashBoardComponent) , title:'DashBoard'}
    ]}
];
