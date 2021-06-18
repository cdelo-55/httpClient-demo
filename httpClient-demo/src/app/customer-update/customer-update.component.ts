import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  id: number;
  customer: Customer;
  updateCustomerForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private customerService: CustomerService,
    private route: ActivatedRoute ) { }

  ngOnInit() :void {
    this.updateCustomerForm = this.fb.group({
      id: ['', ],
      name: ['', ],
      email:  ['', Validators.email],
      tel: ['', ]
    })
  }
  updateCustomer(): void {
    if (this.updateCustomerForm.valid) {
      console.log('success update');
      this.route.params.subscribe(data => this.id = +(data.id));
      console.log(this.id);
      this.customerService.updateCustomer(this.id, this.updateCustomerForm.value ).subscribe(customer => this.customer = customer);
    } else {
      console.log(`failed`)
    }
  }
}
