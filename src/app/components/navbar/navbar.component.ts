import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {
  userType: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userType = localStorage.getItem('userType'); // Retrieve user type from storage
  }

  logout() {
    localStorage.removeItem('userType'); // Clear user type on logout
    this.router.navigate(['/login']);
  }
}
