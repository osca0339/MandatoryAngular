import { Component, OnInit } from '@angular/core';
import { IDriver } from '../idriver';
import { F1DriverService } from '../f1-driver.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-f1-driver',
  templateUrl: './f1-driver.component.html',
  styleUrls: ['./f1-driver.component.css'],
})
export class F1DriverComponent implements OnInit {
  drivers: IDriver[] | undefined;
  constructor(service: F1DriverService, private router: Router) {
    service.getDrivers().subscribe((response) => (this.drivers = response));
  }

  public onSelect(driver: IDriver) {
    this.router.navigate(['/driver-detail', driver.driverId]);
  }

  ngOnInit(): void {}
}
