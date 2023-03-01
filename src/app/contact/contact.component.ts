import { Component } from '@angular/core';
import { photograph } from '../photographer';
import { IPhotograph } from '../IPhotographer';
import { customer } from '../customer';
import { ICustomer } from '../ICustomer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myInfo: Array<IPhotograph> = photograph;
  newCustomer: Array<ICustomer> = [];

constructor(){
  
}

  myFormG = new FormGroup({
    fName: new FormControl('', [Validators.minLength(2), Validators.maxLength(50)]),
    lName: new FormControl('', [Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+[0-9]{2}-?[- ])|0)?[0-9]{10}$")]),
    // phone: new FormControl('', Validators.pattern("^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$")),
  });

  onSubmit() {
    if (this.myFormG.valid) {
      // let myCustomer: { fName: string, lName: string, email: string, phone: string } = {} as ICustomer;
      
      // let myVal:any=this.myFormG.get("fName")?.value;
      let myVal: any = this.myFormG.value;
      this.newCustomer.push(myVal);
      console.log(myVal);
      this.myFormG.reset();
    }
  }
}


