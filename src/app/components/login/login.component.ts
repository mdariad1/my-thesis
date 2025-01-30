import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import all from '../../../assets/data/users.json'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  users: User[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.users = <User[]>all
  }

  login() {
    console.log(this.users)
    const user = this.users.find(u => u.email === this.email && u.password === this.password);

    if (user) {
      localStorage.setItem('userType', user.role);
      localStorage.setItem('userId', user.id);
      
      if (user.role === 'student') {
        this.router.navigate(['/student', user.id]);
      } else if (user.role === 'teacher') {
        this.router.navigate(['/teacher', user.id]);
      }
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
