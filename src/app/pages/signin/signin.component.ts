import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  onsubmit(f:NgForm){
    const {email,password} =f.form.value
    this.auth.signin(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success('Signin successfull!!');
    })
    .catch(err=>{
      console.log(err.message);
      this.toastr.error('Signin Failed!!')
    })
  }


}
