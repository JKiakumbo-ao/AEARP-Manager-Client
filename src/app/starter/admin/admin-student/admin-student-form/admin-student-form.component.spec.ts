import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentFormComponent } from './admin-student-form.component';

describe('AdminStudentFormComponent', () => {
  let component: AdminStudentFormComponent;
  let fixture: ComponentFixture<AdminStudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
