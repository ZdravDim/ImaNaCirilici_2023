import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logInButtonVisible = true;

  ngOnOnit() {
    if (localStorage.getItem('')) { //pokupi token iz storage
      if (false) this.logInButtonVisible = false; //pozovi api i vidi jel validan token
      else this.logInButtonVisible = true;
    }
    else this.logInButtonVisible = true;
  }
}
