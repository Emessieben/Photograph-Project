import { Component } from '@angular/core';
import { photograph } from '../photographer';
import { IPhotograph } from '../IPhotographer';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myInfo: Array<IPhotograph> = photograph;

  myFormG = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl('',[Validators.required,Validators.pattern("^((\\+[0-9]{2}-?)|0)?[0-9]{10}$")]),
  });


  onSubmit() {
   
    console.log(this.myFormG.value.fName);
  }


}
