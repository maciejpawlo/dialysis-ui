import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
  ) { }

  loginForm!: FormGroup;
  isPasswordHidden: boolean = true;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    console.log('is logged in: ', this.auth.isLoggedIn());
  }

  login(): void {
    if(this.loginForm.valid){
      //this.auth.login(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
    }
  }

}
