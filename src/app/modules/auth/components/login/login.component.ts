import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';
import { TokenService } from 'src/app/modules/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  loginForm!: FormGroup;
  isPasswordHidden: boolean = true;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    //console.log('is logged in: ', this.auth.isLoggedIn());
  }

  login(): void {
    if(this.loginForm.valid){
      const login = this.loginForm.get('login')?.value;
      const password = this.loginForm.get('password')?.value;
      this.auth.login(login, password)
        .subscribe({
          next: (data) => {
            if(data.accessToken){
              this.tokenService.saveToken(data.accessToken);
              this.tokenService.saveRefreshToken(data.refreshToken!, new Date(data.refreshTokenExpireDate!));
              this.router.navigate(['/patients'])
            } else {
              console.log('cos nie dziala xd');
            }
          },
          error: (err) => {
            console.log(err);
          }
        });
    }
  }

}
