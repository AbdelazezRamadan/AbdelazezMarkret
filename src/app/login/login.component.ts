import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { textValidation } from '../validation.validator';
import { UniqueNessVAlidation } from '../validation/uniquenessValidation.valdation';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

form = new FormGroup({
  email : new FormControl('', [Validators.required],UniqueNessVAlidation.checkFoundedEmail),
  password : new FormControl('', [textValidation.noSpaceAllow])
})

get email(){
  return this.form.get('email');
}

get password(){
  return this.form.get('password');
}
onChange(password:any){
  console.log(password);

}
}
