import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  user={
    fname:'Ahmed',
    lname:'nagiub',
    email:'ahmed@mail.com',
    password:'dummy@123'
  }
  ngOnInit(){
    localStorage.setItem('user' , JSON.stringify(this.user))
  }
constructor(private route: Router){
}
  signin(email:string , pass:string){
    if(this.user.email === email && this.user.password ===pass){
      localStorage.setItem('userToken' , 'access');
      this.route.navigate(['/courses']);
    }
  }
}
