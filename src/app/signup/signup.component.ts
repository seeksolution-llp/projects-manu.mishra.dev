import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signup:FormGroup|any;
  signuser:any;


  constructor(private _router:Router, private _http:HttpClient, private fb:FormBuilder){
    this.signup=this.fb.group({
     'name':[''],
     'email':[''],
     'password':['']

    })

  }


  ngOnInit():void{
   this.signup = new FormGroup({
    'name':new FormControl(),
     'email': new FormControl(),
     'password': new FormControl()
   })

  }
  signupdata(signup:FormGroup){
   // console.log(this.signup.value);
   this.signuser = this.signup.value.name
   this._http.post<any>("http://localhost:3000/signup",this.signup.value).subscribe(res=>{
    alert('Registration Successfully 👍  ');
    this.signup.reset();
    this._router.navigate(['login']);

   },
   err=>{
    alert('somthing went wrong🤦‍♀️🤦‍♀️')
   })

}
}
