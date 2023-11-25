import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { VezbanjeComponent } from './vezbanje/vezbanje.component';
import { ResursiComponent } from './resursi/resursi.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { LoginComponent } from './login/login.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ForumComponent,
    VezbanjeComponent,
    ResursiComponent,
    ONamaComponent,
    LoginComponent,
    BlogPostComponent,
    BlogPostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
