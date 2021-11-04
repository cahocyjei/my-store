import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/model.products'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  //Recibe del Padre
  @Input() product: Product = {
    id: 0,
    title: "",
    price:0,
    images:[],
    description:"",
    category:{
      id:0,
      name:"",
      typeImg:""
    }


  }
  //Envia al padre
  @Output() addProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<number>();

  constructor() { }

  addCart(){
    this.addProduct.emit(this.product)

  }

  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }
}
