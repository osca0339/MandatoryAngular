import { Component, OnInit } from '@angular/core';
import { IDriver } from '../idriver';
import { F1DriverService } from '../f1-driver.service';

@Component({
  selector: 'app-f1-driver',
  templateUrl: './f1-driver.component.html',
  styleUrls: ['./f1-driver.component.css'],
})
export class F1DriverComponent implements OnInit {
  drivers: IDriver[] | undefined;
  constructor(service: F1DriverService) {
    service.getDrivers().subscribe((response) => (this.drivers = response));
  }

  ngOnInit(): void {}
}
