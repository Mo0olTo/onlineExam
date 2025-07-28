import { Routes } from '@angular/router';

import { AuthlayoutComponent } from './core/layouts/authlayout/authlayout.component';
import { SignInComponent } from './feature/pages/sign-in/sign-in.component';
import { SignUpComponent } from './feature/pages/sign-up/sign-up.component';
import { ForgetPassComponent } from './feature/pages/forget-pass/forget-pass.component';


export const routes: Routes = [

    {path:"" , redirectTo:'signin' , pathMatch:'full'} ,

    {path:'' , component:AuthlayoutComponent , title:'auth' ,children:[
        {path:'signin' , component:SignInComponent , title:'Sign In'},
        {path:'signup' , component:SignUpComponent , title:'Sign up'},
        {path:'forgetPass' , component:ForgetPassComponent , title:'ForgetPass'},

        
    ]}
];
