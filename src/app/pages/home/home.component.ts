import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user=null;
  userName:string;
  error=null;
  constructor(
    private gitHubService : GithubService,
    private ref:ChangeDetectorRef,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  handleFindUser(){
    this.gitHubService.getUserDetails(this.userName).subscribe(
      (user)=>{
        this.user=user;
        this.error=null
        this.ref.detectChanges()
      },
      (err)=>{
        this.user=null
        this.error=`user Not found`;
        this.toastr.error(err);
        
        this.ref.detectChanges()
      }
    )
  }

}
