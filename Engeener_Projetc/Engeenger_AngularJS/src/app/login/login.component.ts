import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LoginService} from '../services/login.service';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import {ModalerroService} from '../services/modalerro.service';

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
              private authService: AuthService,
              private router: Router,
              private ModalerroService: ModalerroService) { }

  login: string = ``;
  password: string = ``;

  subimitForms(form: NgForm) {
    if (form.valid) {
      this._loginService.login(this.login, this.password).subscribe({
        next: (res) =>{
          this.authService.saveToken(res.token);
          const userInfo = this.authService.getDecodedToken();
          this.router.navigate(['/homepage']);
          console.log('Login com sucesso', userInfo);
        },
        error: (err) => {
          this.ModalerroService.showError('Usuário ou senha incorretos!');
        }
      });
    }
  }
}

