import { Injectable } from '@angular/core';
import { Rectangle } from './rectangle';
import { RECTANGLES } from './mock-rectangles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RectangleService {

  constructor() { }

  getRectangles(): Observable<Rectangle[]> {
    return of(RECTANGLES);
  }
}
