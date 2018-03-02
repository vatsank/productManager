import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { Http } from '@angular/http';
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
}
