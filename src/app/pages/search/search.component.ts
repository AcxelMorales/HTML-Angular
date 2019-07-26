import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  value: string;

  constructor(
    private route: ActivatedRoute,
    public _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.value = params['value'];
      console.log(this._productsService.search(this.value));
    });
  }

}
