import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthUIComponent } from "../../../shared/ui/auth-ui/auth-ui.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ToastrService } from 'ngx-toastr';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-forget-pass',
  imports: [AuthUIComponent ,ReactiveFormsModule ,RouterLink],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.scss'
})
export class ForgetPassComponent implements OnInit , AfterViewInit {

  private readonly formBuilder=inject(FormBuilder)
  private readonly authApiService=inject(AuthApiService)
  private readonly toastrService=inject(ToastrService)
    private readonly flowbiteService=inject(FlowbiteService)
    private readonly router=inject(Router)
    private readonly _PLATFORM_ID=inject(PLATFORM_ID)


      step:number=1
      isLoading:boolean=false




        verifyMailForm:FormGroup=this.formBuilder.group({
          email:[null,[Validators.required , Validators.email]]
        })


        verifyCodeForm:FormGroup=this.formBuilder.group({
          resetCode:[null,[Validators.required ,]]
        })

        
        resetPassForm:FormGroup=this.formBuilder.group({
          email:[null,[Validators.required ,Validators.email]] ,
          newPassword:[null, [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]]
        })


  ngAfterViewInit(): void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this.flowbiteService.loadFlowbite((flowbite)=>{})
               initFlowbite();
    }
           
      
  }


  ngOnInit(): void {
      
  }



  verifyMail():void{
    this.isLoading=true
    this.authApiService.forgotPassword(this.verifyMailForm.value).subscribe({
      next:(res)=>{
        console.log(res);
          if (res.message ==='success') {  
            this.step=2
            
          }

        this.isLoading=false
        this.toastrService.success(res.message , res.info) ,{timeOut:5000}
        

      },error:(err)=>{
        console.log(err);
        

        this.isLoading=false
        
      }
    })

  }



  verifecationCode():void{
    this.isLoading=true
    this.authApiService.verifyCode(this.verifyCodeForm.value).subscribe({
      next:(res)=>{
        if (res.status==="Success") {
          console.log(res);
        
          this.step=3
        }
        
        
        this.isLoading=false
        this.toastrService.success(res.message , "onlinm Exam") ,{timeOut:5000}

      },error:(err)=>{
        console.log(err);
        this.toastrService.error(err.message , 'Online Exam')

        
      }
    })
  }



  resetPassword():void{
    this.isLoading=true

    this.authApiService.resetPass(this.resetPassForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.authApiService.saveUserData();

        setTimeout(() => {
           this.router.navigate(['/signin'])
        }, 4000);
       

        this.isLoading=false
        this.toastrService.success(res.message , "Reset Password") , {timeOut:3000}
        
      },error:(err)=>{
        console.log(err);
        this.toastrService.error(err.error.message , "Reset Password") , {timeOut:3000}
        this.isLoading=false
      }
    })
  }

}
