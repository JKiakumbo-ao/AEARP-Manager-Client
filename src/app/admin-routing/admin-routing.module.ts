
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarterContentComponent } from '../starter/starter-content/starter-content.component';
import { StudentComponent } from '../starter/student/student.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: StarterContentComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1',
            component: StudentComponent
          },
          
          {
            path: 'student',
            component: StudentComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
