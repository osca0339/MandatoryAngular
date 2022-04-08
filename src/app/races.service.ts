import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRace } from './irace';

@Injectable({
  providedIn: 'root',
})
export class RacesService {
  constructor(private httpClient: HttpClient) {}

  public getRaces(year: string | null): Observable<IRace[]> {
    return this.httpClient
      .get<IRaceData>(`http://ergast.com/api/f1/${year}.json`)
      .pipe(
        map((races) => {
          return races.MRData.RaceTable.Races.map((race) => {
            return {
              season: race.season,
              round: race.round,
              url: race.url,
              raceName: race.raceName,
              Circuit: race.Circuit,
              Location: race.Circuit.Location,
              date: race.date,
            } as IRace;
          });
        })
      );
  }
}

interface IRaceData {
  MRData: { RaceTable: { Races: IRace[] } };
}
