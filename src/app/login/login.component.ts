import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  checkDAta;
  err;
  constructor(private formBulider: FormBuilder, private validData: ApiService, private route: Router) { }

  ngOnInit() {
    this.login = this.formBulider.group({
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]]
    })
    this.validData.getUserData().subscribe(data => {
      this.checkDAta = data
    })
  }
  onLoginSubmit(form) {
    if (form.valid) {
      for (let i = 0; i < this.checkDAta.length; i++) {
        if (form.value.email == this.checkDAta[i].email && form.value.password == this.checkDAta[i].password) {
          localStorage.setItem('user',JSON.stringify(this.checkDAta[i]))
          this.route.navigate(['/profile']);
          document.getElementById('submitAlert').style.display = 'none';
        } else {
          document.getElementById('submitAlert').style.display = 'block';
          console.log('not valid email');
        }
      }
    }
  }

}
