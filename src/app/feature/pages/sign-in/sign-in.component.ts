import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { AuthUIComponent } from "../../../shared/ui/auth-ui/auth-ui.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { AuthApiService } from 'auth-api';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  imports: [AuthUIComponent,RouterLink ,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit ,AfterViewInit { 


  private readonly formBuilder=inject(FormBuilder) 
  private readonly flowbiteService=inject(FlowbiteService) 
  private readonly authApiService=inject(AuthApiService) 
  private readonly toastrService=inject(ToastrService) 



  isLoading:boolean=false;



  loginForm:FormGroup=this.formBuilder.group({
    email:[null , [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]]
  })




  ngAfterViewInit(): void {
       this.flowbiteService.loadFlowbite((flowbite)=>{})
           initFlowbite();
  }


  ngOnInit(): void {

      
  }



  
  submitForm():void{
     
      if (this.loginForm.valid) {
         this.isLoading=true

         this.authApiService.login(this.loginForm.value).subscribe({
          next:(res)=>{
            console.log(res);
            if (res.message === 'success') {
              setTimeout(() => {
                localStorage.setItem('userToken' , res.token)
              }, 2000);

              this.toastrService.success( res.message , "Login Succes Welcome to Online Exam")
              this.authApiService.saveUserData();
            } 

            this.isLoading=false
          },error:(err:HttpErrorResponse)=>{
            console.log(err); 
            
            this.toastrService.error(err.error.message , 'online Exam'), {timeOut:3000}
            this.isLoading=false
          }
         })

        
      }
  }





}
