import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interfaces/customer';
import { Product } from 'src/interfaces/product';
import { CustomerService } from 'src/services/customer.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  // variables
  products!: Product[];
  selectedProducts!: Product;

  customers!: Customer[];
  selectedCustomers!: Customer;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;
    });

    this.customerService.getCustomersXLarge().then((data) => {
      this.customers = data;
    });
  }

  // changes the label color in the status column depending on state
  getSeverity(status: any) {
    switch (status) {
      case 'EXPIRED':
        return 'danger';

      case 'VALID':
        return 'success';

      case 'EXPIRING SOON':
        return 'warning';

      case 'renewal':
        return null as any;
    }
  }
}
