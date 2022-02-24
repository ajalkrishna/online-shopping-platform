import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin() {
    this.router.navigateByUrl('admin-login')
  }

  adminSignupProcess(data: NgForm) {
    console.log(data);
  }

}
