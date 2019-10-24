import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customers} from '../customers';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})

export class CustomersListComponent implements OnInit {
  matchCustomers: Customers[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
this.customerService.getMatchingCustomers()
.subscribe(
data => {
this.matchCustomers = data;
}

);


  }

}
