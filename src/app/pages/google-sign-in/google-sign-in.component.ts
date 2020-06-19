import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  constructor(public auth: AuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.handleLogin()
  }
    handleLogin() {
    this.auth.login()
    .then(
      (res)=>{
        this.router.navigate(['/'])
      }
    );
  }

}
