import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { StudentModule } from '../student/student.module';
import { AdminStudentModule } from './admin-student/admin-student.module';

@NgModule({
  imports: [
    CommonModule,
    StudentModule,
    AdminStudentModule
  ],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
