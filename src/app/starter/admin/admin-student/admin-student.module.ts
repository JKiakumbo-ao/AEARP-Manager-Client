import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStudentComponent } from './admin-student.component';
import { AdminStudentFormComponent } from './admin-student-form/admin-student-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminStudentComponent, AdminStudentFormComponent],
  exports: [AdminStudentComponent]
})
export class AdminStudentModule { }
