import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }


  onsubmit(f:NgForm){
    const {email,password} =f.form.value
    this.auth.signup(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success('SignUp successfull!!');
    })
    .catch(err=>{
      console.log(err.message);
      this.toastr.error('SignUp Failed!!')
    })
  }

}
