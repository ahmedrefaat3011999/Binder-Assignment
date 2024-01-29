import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgStyle , NgClass , NgIf ,ReactiveFormsModule   ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'gray','border-color':'gray'}
  isClicked=false
  ResponseMessage=""
  isUniuqeEmailMessage=""
  isUniuqeEmail=false
  isSuccess=false
  constructor() { }


  ngOnInit(): void {

  }

  signUp:FormGroup = new FormGroup({
    'first_name' : new FormControl(null ,[Validators.required , Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)] ),
    'last_name' : new FormControl(null ,[Validators.required , Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)] ),
    'age' : new FormControl(null ,[Validators.required ]),
    'email' : new FormControl(null ,[Validators.required , Validators.email] ),
    'password' : new FormControl(null ,[Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/) ]),
  })

  //functions of Form
  validCheck(controlName:string){
    return this.signUp.get(controlName)?.status=='VALID'
  }
  errorCheck(controlName:any){
    return this.signUp.get(controlName)?.errors && this.signUp.get(controlName)?.touched
  }
  FormData(){
    this.isClicked=true

    if(this.signUp.valid)
    {
      // this._AuthService.signUp(this.signUp.value).subscribe(response=>{
      //   if(response.message=="success")
      //   {
      //     this.isClicked=false
      //     this.isSuccess=true
      //     this.isUniuqeEmail=false
      //     this.ResponseMessage=response.message
      //     this.signUp.reset()
      //   }else
      //   {
      //     this.isUniuqeEmailMessage=response.errors.email.message
      //     this.isUniuqeEmail=true
      //     this.isSuccess=false
      //     this.isClicked=false
      //   }
      //   console.log(response)
      // })

  }
}
  getError(name:string)
  {
    return this.signUp.get(name)?.errors
  }


  //see Password

  see(){
    // $("i").toggleClass("fa-eye fa-eye-slash");
    // var input = $($('i').attr("toggle"));
    // if (input.attr("type") == "password") {
    //   input.attr("type", "text");
    // } else {
    //   input.attr("type", "password");
    // }
  }
}
