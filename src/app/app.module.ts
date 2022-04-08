import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { F1DriverService } from './f1-driver.service';
import { F1DriverComponent } from './f1-driver/f1-driver.component';

@NgModule({
  declarations: [AppComponent, F1DriverComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [F1DriverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
