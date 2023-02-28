import { Component } from '@angular/core';

interface ICustomer {
  image: string;
  text: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  customers: Array<ICustomer> = [
    {
      image:
        'https://news.airbnb.com/wp-content/uploads/sites/4/2017/01/airbnb_vertical_lockup_web.png?fit=451%2C493',
      text: 'Belong anywhere',
    },
    {
      image: 'https://pngimg.com/d/uber_PNG24.png',
      text: 'Moving forward',
    },
    {
      image: 'https://assets.stickpng.com/images/62c82369f058e2b89bce43ab.png',
      text: 'Live curious',
    },
  ];
}
