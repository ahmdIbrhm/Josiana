import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoBoardComponent } from './ngo-board.component';

describe('NgoBoardComponent', () => {
  let component: NgoBoardComponent;
  let fixture: ComponentFixture<NgoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
