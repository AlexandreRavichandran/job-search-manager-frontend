import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'jsm-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  username: string = "";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUsername();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  getUsername(): void {
    this.username = this.authService.getUsername();
  }
}
