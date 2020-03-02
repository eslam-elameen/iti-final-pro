import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit, OnChanges {
  ngOnChanges() {
    this.totalPrice()
  }
  servicesForm: FormGroup;
  servicesArray: any = [];
  total = 0;


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

  constructor(
    private formBulider: FormBuilder,
    private services: ShoppingCartService,
    private route: Router
  ) {
  }

  ngOnInit() {

    this.servicesForm = this.formBulider.group({
      cat: ['0', Validators.required],
      dog: ['0', Validators.required],
      date: ['', Validators.required],
      checkServeices: this.formBulider.array([], [Validators.required])

    });
    this.total = this.totalPrice();
    this.saveInSessionStorage();
  }



  onChange(event) {
    this.servicesArray = this.servicesForm.get('checkServeices');

    if (event.target.checked) {

      let services = {
        name: event.target.value,
        price: event.target.name
      }
      this.servicesArray.push(new FormControl(services));

      this.totalPrice()
      this.total = this.totalPrice()
    } else {
      let i: number = 0;
      this.servicesArray.controls.forEach(item => {
        if (item.value.name === event.target.value) {
          this.servicesArray.removeAt(i);
          sessionStorage.setItem('checkServices', JSON.stringify(this.servicesArray.value))

          this.totalPrice()
          this.total = this.totalPrice()
        }
        i++
      })
    }
    // console.log(this.servicesArray.value); 
  }

  onSubmit(form) {
    if (form.valid) {
      if (form.value.dog > 0 || form.value.cat > 0) {

        form.value['qty'] = 1;
        form.value['totalPrice'] = this.total;
        this.services.ourServices.push(form.value);
        sessionStorage.setItem('services', JSON.stringify(this.services.ourServices))
        // this.services.countQuantityOFServices()
        this.route.navigate(['/shoppingCart'])
      }

    }

  }

  totalPrice() {
    let total = 0;
    if (this.servicesArray.length > 0) {
      for (let item of this.servicesArray.value) {
        total += item.price * (this.servicesForm.value.dog + this.servicesForm.value.cat);
        // console.log(total);
      }
    }



    return total;
  }

  onChangevalue(e) {
    if (e.target.value > 0 && this.servicesForm.value.checkServeices.length > 0) {
      this.totalPrice()
      this.total = this.totalPrice();
      // console.log();


    }

  }


  saveInSessionStorage() {
    // check if shopping cart is empty or not 
    if (sessionStorage.getItem('services') === null) {
      this.services.ourServices = []
    } else {
      this.services.ourServices = JSON.parse(sessionStorage.getItem('services'));
      //  console.log( this.products);
    }
  }


}
