import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.router.navigateByUrl('login')
  }

  userLoginProcess(data: NgForm) {
    console.log(data);
  }

}
