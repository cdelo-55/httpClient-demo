import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  id: number;
  customer: Customer;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    this.route.params.subscribe(data => this.id = +(data.id));

    // FIXME - this needs to be invoked differently once the service returns an Observable as expected.
    this.customerService.getCustomer(this.id).subscribe(customer => this.customer = customer);
    //this.customer = this.customerService.getCustomer(this.id);
  }
}
