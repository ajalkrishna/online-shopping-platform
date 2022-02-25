import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route:Router,private userApi:UserApiService) { }

  ngOnInit(): void {
  }

  logoutUser(){
    // remove token
    localStorage.removeItem('token')
    // make behaviour subect into null
    this.userApi.user.next(null)
    // route to login page
    this.route.navigateByUrl('login')
  }

}
