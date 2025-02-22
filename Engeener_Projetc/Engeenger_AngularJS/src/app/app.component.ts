import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavBarComponent], // Inclua LoginComponent aqui se ele for usado neste template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correção: styleUrls no plural
})
export class AppComponent {
  title = 'Engeenger_AngularJS';
}
