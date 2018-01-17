import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  zones: Array<string> = ['PST','MST','CST','EST'];
  click = "";
  onButtonClick(zone) { 
    this.click = zone;
    this.zones = ['PST','MST','CST','EST'];
    console.log(zone);
    if(!zone) {
      this.resetTime();
    } else {
      this.Time();
    }
  }

  resetTime() {
    this.today = null;
  }
  
  Time() {
    this.today = new Date();
  }
}

