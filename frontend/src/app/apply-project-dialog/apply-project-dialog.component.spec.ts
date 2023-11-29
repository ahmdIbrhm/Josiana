import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyProjectDialogComponent } from './apply-project-dialog.component';

describe('ApplyProjectDialogComponent', () => {
  let component: ApplyProjectDialogComponent;
  let fixture: ComponentFixture<ApplyProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyProjectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
