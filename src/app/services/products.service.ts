import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProducto } from '../models/IProducto';
import { IProductoInfo } from '../models/IProductoInfo';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading: boolean = true;
  products: IProducto[] = [];
  filterProducts: IProducto[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://portafolio-angular-94474.firebaseio.com/productos_idx.json')
        .subscribe((data: IProducto[]) => {
          this.products = data;
          this.loading = false;
          resolve();
        });
    });

  }

  getProduct(id: string): Observable<IProductoInfo> {
    return this.http.get<IProductoInfo>(`https://portafolio-angular-94474.firebaseio.com/productos/${id}.json`);
  }

  search(value: string): IProducto[] {
    if (this.products.length === 0) {
      this.getProducts().then(() => {
        this.filterProducts = this.products.filter(p => p.categoria === value);
      });
    } else {
      return this.filterProducts = this.products.filter(p => p.categoria === value);
    }
  }

}
