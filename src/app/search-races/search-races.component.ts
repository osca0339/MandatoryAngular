import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRace } from '../irace';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-search-races',
  templateUrl: './search-races.component.html',
  styleUrls: ['./search-races.component.css'],
})
export class SearchRacesComponent implements OnInit {
  races: IRace[] | undefined;
  year: string;
  constructor(
    private raceService: RacesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.year = '2022';
  }

  /*public onSelect(year: string) {
    this.router.navigate(['/search-races', year]);
  }*/

  ngOnInit() {
    this.raceService
      .getRaces(this.route.snapshot.paramMap.get(this.year))
      .subscribe((response) => (this.races = response));
  }
}
