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
  isEditing=false;
  freshClient:Product={
    name:'',
    category:'',
    price:0,
    details:'',
    id:0
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

 
    this.productList = this.productList.filter(b => b !== data);

  }

  submit(frmData){

    if (!this.isEditing)
    {
     this.productToAdd = frmData;
     this.productList.push(this.productToAdd);
      this.prodService.addProduct(frmData).subscribe(res => console.log(res));
       this.form.reset();
    } else {
        console.log('Edit Will be called');
        console.log(frmData.id +'will be updated');
        this.productList.push(frmData);
        this.prodService.updateProduct(this.freshClient).subscribe(resp => console.log(resp));


    }
    }

    edit(obj)  {
      console.log('edit'+obj.id);
     this.freshClient=obj;
     this.isEditing = true;
    }
}

