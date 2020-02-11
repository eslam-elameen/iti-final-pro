import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  registrationForm: FormGroup
  constructor(private registerBuild: FormBuilder, private http: ApiService) { }

  ngOnInit() {
    this.registrationForm = this.registerBuild.group({
      name: ['', [Validators.required, Validators.pattern(/^(?=.*\w)[A-z0-9]{6,10}$/)]],
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{1,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.match('password', 'confirmPassword'),
    });
  }


  match(password, confirmPassword) {
    return (registrationForm: FormGroup) => {

      let validPassword = registrationForm.controls[password];
      let validConfirmPassword = registrationForm.controls[confirmPassword];

      if (validPassword.value !== validConfirmPassword.value) {
        validConfirmPassword.setErrors({ match: true });
      } else {
        validConfirmPassword.setErrors(null)
      }
    }
  }
  ar = [];
  onregisterSubmit(form) {
    console.log(form);

    if (form.valid == true) {
      // this.ar.push(form.value)
      // let x = localStorage.setItem('input', JSON.stringify(this.ar))
      const headers = { "Content-Type": "application/json" }
      this.http.postData("http://localhost:3000/users", form.value, headers).subscribe(data =>{
        console.log(data);
      })

      console.log(this);

    }
  }

}

