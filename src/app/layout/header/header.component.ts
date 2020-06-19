import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email=null;
  constructor(
    private auth:AuthService,
    private toastr:ToastrService,
    private router:Router
    ) { 
      auth.getUser().subscribe(
        user=>{
          this.email=user?.email
        }
      )
    }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try {
      const res=this.auth.siginOut()
      .then(()=>{
        this.router.navigate(['signin'])
        this.toastr.info('You have Been SignOut!!! SignIn again to continue')
        this.email=null
      });
    } catch (error) {
      this.toastr.error("something happening wrong here!!!!")
      
    }
  }

}
