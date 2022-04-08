import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { F1DriverComponent } from './f1-driver/f1-driver.component';
import { SearchRacesComponent } from './search-races/search-races.component';

const routes: Routes = [
  { path: 'f1-driver', component: F1DriverComponent },
  { path: 'driver-detail/:driverId', component: DriverDetailComponent },
  { path: 'search-races/:year', component: SearchRacesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
