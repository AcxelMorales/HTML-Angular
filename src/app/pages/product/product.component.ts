import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';
import { IProductoInfo } from 'src/app/models/IProductoInfo';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: IProductoInfo;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this._productsService.getProduct(params['id'])
        .subscribe(resp => this.product = resp);
    });
  }

}
