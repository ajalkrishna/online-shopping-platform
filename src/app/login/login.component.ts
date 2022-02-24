import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adminLogin() {
    this.router.navigateByUrl('admin-login')
  }

  userSignup() {
    this.router.navigateByUrl('user-signup')
  }

  adminSignup() {
    this.router.navigateByUrl('admin-signup')
  }

  loginProcess(data: NgForm) {
    console.log(data);
  }

}
