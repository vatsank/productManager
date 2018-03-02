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
  productToAdd: Product;
  productList: Product[];
  constructor(private prodService: ProductService) { }

  ngOnInit() {

     this.prodService.getAllProducts().
      subscribe(prdList => this.productList = prdList);
  }

  remove(data) {

   
    this.prodService.removeProduct(data.id).subscribe(res => console.log(res));

    let idxPos = data.id;
    this.productList.splice(--idxPos, 1);
  
  
  }

  submit(frmData){

     this.productToAdd = frmData;
     this.productList.push(this.productToAdd);
     console.log(this.productToAdd);

  }
}

