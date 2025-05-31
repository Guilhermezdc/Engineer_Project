import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // ajuste o caminho conforme seu projeto
import {HomepageComponent} from './homepage/homepage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
];
