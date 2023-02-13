import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <br>
    {{exampleDate | date: 'dd/MM/YYYY'}}
  `,
  providers: [DatePipe],
})
export class App implements OnInit {
  name = 'Angular';
  exampleDate = '9999-12-31T16:00:00Z';
  constructor(private datePipe: DatePipe) {}
  ngOnInit() {
    const newDate = new Date('9999-12-31T16:00:00Z');
    const piped = this.datePipe.transform(newDate, 'dd:MM:YYYY hh:mm:ss');
    console.log(newDate.toLocaleTimeString());
    console.log(newDate.toDateString());
    console.log('datePiped', piped);
  }
}

bootstrapApplication(App);
