import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProductComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
