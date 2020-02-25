import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  allDataOfUsers;
  flag;
  registrationForm: FormGroup;
  getFile: File;

  constructor(private registerBuild: FormBuilder, private http: ApiService, private route: Router) { }

  ngOnInit() {

    this.registrationForm = this.registerBuild.group({
      name: ['', [Validators.required, Validators.pattern(/^(?=.*\w)[A-z0-9]{6,10}$/)]],
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.match('password', 'confirmPassword'),
    });

    this.http.getUserData().subscribe(data => {
      this.allDataOfUsers = data
    })
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
  onregisterSubmit(registrationForm) {

    if (registrationForm.valid == true) {
      this.flag = false;
      for (let i = 0; i < this.allDataOfUsers.length; i++) {
        if (registrationForm.value.email === this.allDataOfUsers[i].email) {
          this.flag = true
        }
      }
      this.test(registrationForm)
    }
  }
  test(registrationForm) {
    console.log('inside test function');
    if (this.flag == false) {
      const headers = { "Content-Type": "application/json" }
      this.http.postData("http://localhost:3000/users", registrationForm.value, headers).subscribe(data => {
      })
      this.allDataOfUsers.push(registrationForm.value);
      this.route.navigate(['/profile']);
    }
  }
}
