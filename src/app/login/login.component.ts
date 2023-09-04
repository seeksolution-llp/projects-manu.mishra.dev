import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup|any;

  constructor(private _http:HttpClient, private _route:Router, private fb:FormBuilder){
    this.login=this.fb.group({

      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required,Validators.minLength(5)]]

    })
  }



  ngOnInit(): void {

  }




  logindata(login:FormGroup){
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.login.value.email && a.password===this.login.value.password
      });
      if(user){
        alert("you are successfully login😊👍");
        this.login.reset();
        this._route.navigate(['product']);
      }
      else{
        alert("user not found🙄😶");
        this._route.navigate(['signup']);
      }
    },err=>{
      alert("something went wrong🤦‍♀️🤦‍♀️");
    })

  }




}






