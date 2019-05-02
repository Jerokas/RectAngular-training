import { Component, Output, EventEmitter } from '@angular/core';
import { Rectangle, Unit } from './rectangle';
import { RECTANGLES } from './mock-rectangles';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'RectAngular';
  }

