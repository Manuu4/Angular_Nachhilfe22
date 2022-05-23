import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // super wichtige function ohne die die Website niemals funktionieren würde
  get randomWelcomeText() {
    let randomText: Array<string> = [
      "Eintreten",
      "Los geht's",
      "Weniger auswendig lernen, mehr verstehen",
      "Common' future genius, click me",
      "Zu den Angeboten",
      "Mach schon",
      "Viel Erfolg",
      "1er-Schnitt, ich komme",
      "Hilfe finden",
      "Gogogo",
      "Bücherlis-... äh, ich meine Nachhilfeangebote durchstöbern",
    ];
    return randomText[Math.floor(Math.random() * randomText.length)];
  }

}
