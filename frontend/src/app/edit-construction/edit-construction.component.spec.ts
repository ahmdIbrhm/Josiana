import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConstructionComponent } from './edit-construction.component';

describe('EditConstructionComponent', () => {
  let component: EditConstructionComponent;
  let fixture: ComponentFixture<EditConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
