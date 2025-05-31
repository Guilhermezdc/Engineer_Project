import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LoginService} from '../services/login.service';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css'
})


export class LoginComponent {
  constructor(private _loginService: LoginService,
              private authService: AuthService) {}

  login: string = ``;
  password: string = ``;

  subimitForms(form: NgForm) {
    if (form.valid) {
      this._loginService.login(this.login, this.password).subscribe({
        next: (res) =>{
          this.authService.saveToken(res.token);
          const userInfo = this.authService.getDecodedToken();
          console.log('Login com sucesso', userInfo);
        },
        error: (err) => console.error('Erro no login', err),
      });
    }
  }
}

