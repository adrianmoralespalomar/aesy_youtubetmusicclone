import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/constants/global-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  standalone:true,
  imports:[ReactiveFormsModule,NgClass]
})
export class LoginComponent implements OnInit {

  constructor(private form:FormBuilder, private route: Router) { }
  formGroup = this.form.group({
    username: [null,[Validators.required,Validators.minLength(3)]],
    password: [null,[Validators.required,Validators.pattern('123456')]]
  });
  ngOnInit() {}
  CheckLogin(){
    if(this.formGroup.valid){
     localStorage.setItem(GlobalConstant.Cookie_key_logged,this.formGroup.get('username')?.value || '');
     this.route.navigate(['']);
    }
    // if(this.formGroup.valid) console.log("Valid")
    // else console.log("nOT Valid")
  }
}
