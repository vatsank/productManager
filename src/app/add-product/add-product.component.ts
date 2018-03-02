import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  deleted: any = {};
  productList: Product[];
  constructor(private prodService: ProductService) { }

  ngOnInit() {

     this.prodService.getAllProducts().
      subscribe(prdList => this.productList = prdList);
  }

  remove(data) {

    this.prodService.removeProduct(data.id).subscribe(res => console.log(res));

  }
}

