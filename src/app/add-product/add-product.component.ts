import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  deleted: any = {};
  productToAdd: Product;
  productList: Product[];
  freshClient:Product={
    name:'',
    category:'',
    price:0,
    details:''
  }
  srchCriteria ='';
  @ViewChild('frm') form: any;
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
      this.prodService.addProduct(frmData).subscribe(res => console.log(res));
       this.form.reset();
    }

    edit(obj)  {
      console.log('edit'+obj);
    this.freshClient = obj;

    }
}

