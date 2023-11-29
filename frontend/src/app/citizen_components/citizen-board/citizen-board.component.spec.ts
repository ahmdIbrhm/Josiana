import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenBoardComponent } from './citizen-board.component';

describe('CitizenBoardComponent', () => {
  let component: CitizenBoardComponent;
  let fixture: ComponentFixture<CitizenBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
