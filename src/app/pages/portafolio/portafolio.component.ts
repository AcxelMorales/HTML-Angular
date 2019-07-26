import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent implements OnInit {

  constructor(
    public _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    
  }

}
