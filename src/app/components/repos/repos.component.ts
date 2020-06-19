import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() repoUrl:string
  repos=[];
  constructor(
    private gitHubService:GithubService,
    private ref:ChangeDetectorRef,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {

  }
  ngOnChanges():void {
    if(this.repoUrl){
      this.gitHubService.getRepos(this.repoUrl).subscribe(
        (repos:[])=>{
          this.repos=repos;
          this.ref.detectChanges()
        },
        (err)=>{
          this.toastr.error(err);
        }
      )
    }
  }

}
