import { Component, OnInit } from '@angular/core';
import { IDriver } from '../idriver';
import { F1DriverService } from '../f1-driver.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css'],
})
export class DriverDetailComponent implements OnInit {
  drivers: IDriver[] | undefined;
  constructor(
    private driverService: F1DriverService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.driverService
      .getDriver(this.route.snapshot.paramMap.get('driverId'))
      .subscribe((response) => (this.drivers = response));
  }

  ngOnInit() {}
}
