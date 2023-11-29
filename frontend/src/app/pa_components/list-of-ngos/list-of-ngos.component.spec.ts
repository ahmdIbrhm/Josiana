import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfNgosComponent } from './list-of-ngos.component';

describe('ListOfNgosComponent', () => {
  let component: ListOfNgosComponent;
  let fixture: ComponentFixture<ListOfNgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfNgosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfNgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
