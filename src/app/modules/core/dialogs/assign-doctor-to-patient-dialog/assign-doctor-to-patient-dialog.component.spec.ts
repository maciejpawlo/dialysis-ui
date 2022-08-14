import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDoctorToPatientDialogComponent } from './assign-doctor-to-patient-dialog.component';

describe('AssignDoctorToPatientDialogComponent', () => {
  let component: AssignDoctorToPatientDialogComponent;
  let fixture: ComponentFixture<AssignDoctorToPatientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDoctorToPatientDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDoctorToPatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
