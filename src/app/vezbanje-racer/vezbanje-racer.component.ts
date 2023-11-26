import { Component } from '@angular/core';

@Component({
  selector: 'app-vezbanje-racer',
  templateUrl: './vezbanje-racer.component.html',
  styleUrls: ['./vezbanje-racer.component.css']
})
export class VezbanjeRacerComponent {
  public characterSet = new Set(["љ", "њ", "е", "р", "т", "з", "у", "и", "о", "п", "ш", "ђ", "а", "с", "д", "ф",
    "г", "х", "ј", "к", "л", "ч", "ћ", "ж", "џ", "ц", "в", "б", "н", "м", "Љ", "Њ", "Е", "Р", "Т", "З", "У", "И", "О", "П", "Ш", "Ђ", "А", "С", "Д", "Ф",
    "Г", "Х", "Ј", "К", "Л", "Ч", "Ћ", "Ж", "Џ", "Ц", "В", "Б", "Н", "М", " ", ".", ",", "!", ";", ":"]);

  public characterMap = new Map(); //TODO Finish map
  konvertuj_u_latinicu() {} //TODO Finish converter
  pokreni():void {
    let text: string = "Ја се зовем Лука";
    let textLen: number = text.length;
    let textPrompt: HTMLElement|null = document.getElementById("TextPrompt");
    let textUser: HTMLElement|null = document.getElementById("TextUser");
    let i:number = 0;
    let numberOfErrors = 0;

    if (textPrompt != null) textPrompt.innerHTML = text;
    if (textUser != null) document.addEventListener("keydown", (event) => {
      if (this.characterSet.has(event.key)) {
        if (event.key === text.charAt(i) && textUser != null) textUser.innerHTML += event.key;
        else if (textUser != null) textUser.innerHTML += "<span style='color:red'>" + event.key + "</span>";
        if (i++ === textLen-1) {
          //TODO Send to server, prekini kad se iskuca textLen karaktera
          alert("Broj gresaka je " + numberOfErrors + " od " + textLen + " karaktera!");
          alert(textUser?.innerText);
        }
      }
    })
  }
}
