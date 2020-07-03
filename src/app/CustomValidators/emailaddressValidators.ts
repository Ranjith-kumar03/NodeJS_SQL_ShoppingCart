import { ValidatorFn, AbstractControl } from '@angular/forms';

export function EmailAddressValidator(email: RegExp):ValidatorFn
{
 return (control: AbstractControl):{[key: string]:any} | null => {

  let status = email.test(control.value)

  console.log(control.value)
  console.log("see the status"+status)
  return !status? {'inValidEmail':{value:control.value}} : null

 }
}
