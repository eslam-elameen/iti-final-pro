import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  allDataOfUsers;
   
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

    // this.http.getData().subscribe(data => {
    //   this.allDataOfUsers = data
      // console.log(this.allDataOfUsers)
    // })
    this.http.getData().subscribe(data=>{
      this.allDataOfUsers = data
      console.log(this.allDataOfUsers);
      
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
  onregisterSubmit(form) {
    let flag = false;
    console.log(form.value)
    console.log(this.registrationForm.value.name)
    for(let i = 0 ; i < this.allDataOfUsers.length ; i++){
      // if(form.value.name===this.allDataOfUsers[i].name){
      //   console.log('inside if');
      //   break;
      // }else{
      //   console.log('else');
        
      // }
      if(form.value.name === this.allDataOfUsers[i].name){
        console.log('inside if')
        flag=true
        console.log(flag)
        // break;
        //  console.log(data);
      }else{
        console.log(' else');
        console.log(flag)
        // document.getElementById('uname').value = ''
        
        

        // console.log(form.value.name);
        // console.log(this.allDataOfUsers[i].name);
      }
    
    }
    this.test(form, flag)
    
  }
      test(form, flag){
        if(!flag){
          const headers = { "Content-Type": "application/json" }
          this.http.postData("http://localhost:3000/users", form.value, headers).subscribe(data => {
          })
    
        }
      }
}
