import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../models/model.products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product: Product = {
    id: "",
    name: "",
    price:0,
    img:""

  }
  constructor() { }

  ngOnInit(): void {
  }

}
