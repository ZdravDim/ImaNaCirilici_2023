import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { VezbanjeComponent } from './vezbanje/vezbanje.component';
import { ResursiComponent } from './resursi/resursi.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { LoginComponent } from './login/login.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'blog', component: BlogComponent},
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
