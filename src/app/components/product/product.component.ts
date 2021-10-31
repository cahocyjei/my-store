import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/model.products'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: "",
    title: "",
    price:0,
    image:"",
    description:"",
    category:""


  }
  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }

  addCart(){
    this.addProduct.emit(this.product)

  }
}
