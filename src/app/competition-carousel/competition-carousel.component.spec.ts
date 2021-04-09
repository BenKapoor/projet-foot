import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCarouselComponent } from './competition-carousel.component';

describe('CompetitionCarouselComponent', () => {
  let component: CompetitionCarouselComponent;
  let fixture: ComponentFixture<CompetitionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
