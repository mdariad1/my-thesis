import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ThesisComponent } from './components/thesis/thesis.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'student/:studentid', component: StudentComponent },
    { path: 'teacher/:teacherid', component: TeacherComponent },
    { path: 'thesis', component: ThesisComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }