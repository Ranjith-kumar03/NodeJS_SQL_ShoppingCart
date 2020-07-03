import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EmailAddressValidator } from 'src/app/CustomValidators/emailaddressValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder: FormBuilder) { }
  user = new User();
  registrationForm: FormGroup;
  ngOnInit(): void {
//^([a-zA-Z0-9]+)@([memail]+)\.([com]{2,5})$
    this.registrationForm = this.builder.group({
      name:['',[Validators.required, Validators.minLength(8)] ],
      emailaddress: ['',[Validators.required, Validators.minLength(8) ,
                         EmailAddressValidator(/^([a-zA-Z0-9\.\-\_]+)(@memail.com)$/)] ],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmpassword: ['',[Validators.required, Validators.minLength(8)]],
      }, {}

      );
  }

  onSubmit(registrationForm)
  {
  this.user = this.registrationForm.value;
  }

  get Name(): any
  {
   return this.registrationForm.get('name')
  }
  get EmailAddress(): any
  {
    return this.registrationForm.get('emailaddress')
  }
  get Password(): any
  {
    return this.registrationForm.get('password')
  }
  get ConfirmPassword(): any
  {
    return this.registrationForm.get('confirmpassword')
  }
}
