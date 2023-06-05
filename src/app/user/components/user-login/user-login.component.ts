import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/auth/user-auth.service';
import { Response } from 'src/app/core/models/data.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  msg:string="";
  loginFrom = this.builder.group({
    username: this.builder.control('',[Validators.required]),
    password: this.builder.control('',[Validators.required])
  });

  loginRequest: any = {
    username: "",
    password: ""
  };
  
  
  
  constructor(private builder:FormBuilder, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginFrom.valueChanges.subscribe((r)=>{
      this.loginRequest.username = r.username;
      this.loginRequest.password = r.password;
    });
    let token = sessionStorage.getItem("token");
    let is_admin = JSON.parse(sessionStorage.getItem("is_admin") || "false");
    if (token) {
      if (!is_admin) {
        this.router.navigateByUrl("user/home");
      } else {
        this.router.navigateByUrl("admin/home");
      }
    }
  }

  login(){
    if (this.loginFrom.valid) {
      this.userAuthService.userLogin(this.loginRequest).subscribe((response:Response)=>{
        let token:string = response.response;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("is_admin", "false");
        this.router.navigateByUrl("user/home");
      });
    }else{
      this.msg = "`Invalid credentials";
    }
  }
}
