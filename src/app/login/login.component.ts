import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserApiService } from '../user/user-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private userApi:UserApiService) { }

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
    this.userService.loginUser(data).subscribe({
      next: (res) => {
        // login successfull
        if (res.message == 'User login successfull!') {
          // set token into local storage
          localStorage.setItem('token',res.token)
          // update behaviour subject
          this.userApi.user.next(res.user)
          // navigate to userPage
          this.router.navigateByUrl('user')
          this.userApi.userAccount.subscribe(res=>console.log(res))
        }
        else{
          console.log(res.message)
        }
      },
      error: (err) => { console.log(err) }
    })
  }

}
