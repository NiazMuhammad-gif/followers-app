import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubFollowersService } from './github-followers/github-followers.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubFollowersComponent,
    HomeComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent }
    ])
  ],
  providers: [
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
