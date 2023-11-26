import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { VezbanjeComponent } from './vezbanje/vezbanje.component';
import { ResursiComponent } from './resursi/resursi.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { LoginComponent } from './login/login.component';
import { WebsiteComponent } from './website/website.component';
import { RegisterComponent } from './register/register.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'blog/:blogId', component: BlogPostComponent},
      {path: 'forum', component: ForumComponent},
      {path: 'vezbanje', component: VezbanjeComponent},
      {path: 'resursi', component: ResursiComponent},
      {path: 'o nama', component: ONamaComponent},
      {path: 'login', component: LoginComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
