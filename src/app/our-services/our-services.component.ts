import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  servicesForm: FormGroup;
   arr: any = [];

  data = [
    {
      id: 1,
      name: 'Grooming',
      price: 10
    },
    {
      id: 2,
      name: 'Dry & Bath',
      price: 30
    }
  ]
  constructor(private formBulider: FormBuilder) { 
  }

  ngOnInit() {

    this.servicesForm = this.formBulider.group({
      cat: ['0' , Validators.required],
      dog: '0',
      date: '',
      checkServeices: this.formBulider.array([], [Validators.required])
      
    });

    // this.totalPrice()
    
  }

  onChange(e){
    let servicesArray: FormArray = this.servicesForm.get('checkServeices') as FormArray;

    if(e.target.checked){
      let services = {
        name: e.target.value,
      
      }
      servicesArray.push(new FormControl(services));
    }else{
      let i: number = 0;
      servicesArray.controls.forEach(item => {
        if(item.value === e.target.value){
          servicesArray.removeAt(i);
        }
        i++
      })
    }
    console.log(servicesArray.value);
      
  }

  onSubmit(form){
    if(form.valid ){
      if( form.value.dog > 0 || form.value.cat > 0){
        form.value['qty'] = 1;
        this.arr.push(form.value);
        sessionStorage.setItem('services',JSON.stringify( this.arr))
        // console.log(this.arr);
        this.servicesForm.reset();
        
        
      }

    }

    
  }

  // totalPrice(){
  // let total = 0;
  // for(let item of this.servicesForm.value.checkServeices){
  //   total += (Math.floor(item)) * (this.servicesForm.value.dog + this.servicesForm.value.cat)  
  // }
  // // console.log(total);
  // return total;
  // }

}
