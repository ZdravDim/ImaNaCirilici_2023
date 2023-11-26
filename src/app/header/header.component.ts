import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logInButtonVisible = true;

  constructor() {
    if (localStorage.getItem('accessToken')?.length) this.logInButtonVisible = false;
    else this.logInButtonVisible = true;
  }

  izlogujSe(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    document.location.reload();
  }
}
