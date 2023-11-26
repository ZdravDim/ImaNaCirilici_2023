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
import { WebsiteComponent } from './website/website.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VezbanjeRacerComponent } from './vezbanje-racer/vezbanje-racer.component';
import { ApiDocumentationComponent } from './api-documentation/api-documentation.component';
import { TransliteratorOnlineComponent } from './transliterator-online/transliterator-online.component';
import { ForumNewPostComponent } from './forum-new-post/forum-new-post.component';
import { DodajBlogComponent } from './dodaj-blog/dodaj-blog.component';

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
    WebsiteComponent,
    RegisterComponent,
    LogoComponent,
    VezbanjeRacerComponent,
    ApiDocumentationComponent,
    TransliteratorOnlineComponent,
    ForumNewPostComponent,
    DodajBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
