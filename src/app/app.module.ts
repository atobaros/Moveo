import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { FormsModule } from '@angular/forms';
import { CursorAreaComponent } from './components/cursor-area/cursor-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
    CursorAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
