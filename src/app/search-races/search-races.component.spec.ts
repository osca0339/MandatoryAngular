import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRacesComponent } from './search-races.component';

describe('SearchRacesComponent', () => {
  let component: SearchRacesComponent;
  let fixture: ComponentFixture<SearchRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
