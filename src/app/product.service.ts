import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  baseUrl = 'http://localhost:3000/products';
  constructor(private service: Http) { }

  getAllProducts(): Observable<Product[]> {

     return this.service.get(this.baseUrl).map(res => res.json());
  }

  removeProduct(key): Observable<Response> {

     const deleteURL = this.baseUrl + '/' + key;

     return this.service.delete(deleteURL).map(res => res.json());

  }

  addProduct(prdToAdd: Product): Observable<Product>{

    const hd = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: hd });

    return this.service.post(this.baseUrl, prdToAdd, options).map(res => res.json());


  }

  updateProduct(product: Product):Observable<number> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
          const options = new RequestOptions({ headers: headers });
          console.log('product in update'+product);
          return this.service.put(this.baseUrl + '/3', product, options)
                 .map(success => success.status);
      }

}
