import { Component } from '@angular/core';
import { portfolio } from '../portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  portfolio = portfolio;
}
