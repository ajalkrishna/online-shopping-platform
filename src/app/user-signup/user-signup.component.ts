import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
// import { UserApiService } from '../user/user-api.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  constructor(private userApi:UserService) { }

  ngOnInit(): void {
  }
  
  userSignupProcess(data: NgForm) {
    console.log(data);
    this.userApi.userRegistration(data).subscribe({
      next:(res)=>{
        console.log(res.message)
      },
      error:(err)=>{console.log(err)}
    })
    
  }

}
