import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectanglesComponent } from './rectangles/rectangles.component';
import { AreaCalculatorComponent } from './area-calculator/area-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    RectanglesComponent,
    AreaCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
