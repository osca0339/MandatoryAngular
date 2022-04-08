import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IDriver } from './idriver';

@Injectable({
  providedIn: 'root',
})
export class F1DriverService {
  constructor(private httpClient: HttpClient) {}

  public getDrivers(): Observable<IDriver[]> {
    return this.httpClient
      .get<IDriverData>('http://ergast.com/api/f1/2019/drivers.json')
      .pipe(
        map((drivers) => {
          return drivers.MRData.DriverTable.Drivers.map((driver) => {
            return {
              driverId: driver.driverId,
              permanentNumber: driver.permanentNumber,
              code: driver.code,
              givenName: driver.givenName,
              familyName: driver.familyName,
              dateOfBirth: driver.dateOfBirth,
              nationality: driver.nationality,
            } as IDriver;
          });
        })
      );
  }
}

interface IDriverData {
  MRData: { DriverTable: { Drivers: IDriver[] } };
}
