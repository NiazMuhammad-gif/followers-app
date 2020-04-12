import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: [];
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }
    
    ngOnInit(): void {
      combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ])
      .subscribe(combine =>{
        let id = combine[0].get('id');
        let page =combine[1].get('page');
        
        this.service.getFollowers()
        .subscribe(response=>{this.followers = response as any});
        
    });
  }
}
