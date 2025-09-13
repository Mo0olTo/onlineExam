import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { AuthUIComponent } from "../../../shared/ui/auth-ui/auth-ui.component";
import { Router, RouterLink } from '@angular/router';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { AuthApiService } from 'auth-api';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sign-up',
  imports: [AuthUIComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit ,AfterViewInit{

  private readonly formBuilder=inject(FormBuilder);
  private readonly flowbiteService=inject(FlowbiteService);
  private readonly authApiService=inject(AuthApiService)
  private readonly router=inject(Router)
  private readonly toastrService=inject(ToastrService)
  


  msgSucces:string=''

  isLoading:boolean=false;



  registerForm:FormGroup=this.formBuilder.group({

    username:[null,[Validators.required]],
    firstName:[null,[Validators.required]],
    lastName:[null,[Validators.required]],
    email:[null , [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    rePassword:[null , [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    phone:['01003182407', [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],

  } , {validators:this.matchPassword})

  ngAfterViewInit(): void {
      
     this.flowbiteService.loadFlowbite((flowbite)=>{})
     initFlowbite();
  }

  ngOnInit(): void {


      
  }




  submitForm():void{
   
    if(this.registerForm.valid){
       this.isLoading=true
      this.authApiService.register(this.registerForm.value).subscribe({
        next:(res)=>{

          if(res.message==='success'){
            console.log(res);
          setTimeout(() => {
            this.router.navigate(['/signin'])
          }, 2000);

          }
          this.toastrService.success(res.message , 'Onilne Exam') , {timeOut:4000}
          this.isLoading=false

        },error:(err)=>{
          console.log(err);
          if(err){
            this.toastrService.error(err.error.message , 'Online Exam') , {timeOut:3000}
          }
          this.isLoading=false
        }
      })

    }
    
  }



  matchPassword(group:AbstractControl){
    const password=group.get('password')?.value
    const rePassword=group.get('rePassword')?.value

    return password === rePassword ? null :  {missmatch:true}
  }



}
