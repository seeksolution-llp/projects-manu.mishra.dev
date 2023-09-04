import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path:'product', component:ProductComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
