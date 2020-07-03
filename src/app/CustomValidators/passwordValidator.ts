import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl):{[key: string]: boolean}|null
{
  const password = control.get('password');
  console.log(`see the password ${password.value}`);

  const confirmpassword = control.get('confirmpassword');
  console.log(`see the confirm password ${confirmpassword.value}`);

  if(password.pristine || confirmpassword.pristine)
  {
    return null;
  }
  const result = password.value !== confirmpassword.value ? true : null
  console.log("result is "+ result)

  return password && confirmpassword && password.value !== confirmpassword.value ? {'mismatch':true} : null
}
