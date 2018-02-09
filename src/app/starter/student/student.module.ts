import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentComponent, StudentFormComponent],
  exports: [StudentComponent]
})
export class StudentModule { }
