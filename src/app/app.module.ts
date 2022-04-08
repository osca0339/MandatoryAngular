import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { F1DriverService } from './f1-driver.service';
import { F1DriverComponent } from './f1-driver/f1-driver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { SearchRacesComponent } from './search-races/search-races.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    F1DriverComponent,
    NavbarComponent,
    DriverDetailComponent,
    SearchRacesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [F1DriverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
