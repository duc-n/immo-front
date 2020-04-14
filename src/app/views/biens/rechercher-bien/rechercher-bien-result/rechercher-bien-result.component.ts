import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-rechercher-bien-result',
  templateUrl: './rechercher-bien-result.component.html',
  styleUrls: ['./rechercher-bien-result.component.scss']
})
export class RechercherBienResultComponent implements OnInit {

  products$;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
