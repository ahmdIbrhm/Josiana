import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaBoardComponent } from './pa-board.component';

describe('PaBoardComponent', () => {
  let component: PaBoardComponent;
  let fixture: ComponentFixture<PaBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
