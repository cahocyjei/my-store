import { Component, OnInit} from '@angular/core';
import { Product} from '../../models/model.products'
import { StoreService} from '../../services/store.service'
import { ProductsService} from '../../services/products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[]= [];
  total=0;
  today= new Date();
  date= new Date(2021,1,12);

  myProducts:Product[]=[]

  constructor(private storeService:StoreService,private productsService:ProductsService) {
    this.myShoppingCart= this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data=>{
      this.myProducts= data;
    });
  }

  addToShoppingCart(product:Product){
    this.storeService.getMyShoppingCart(product);
    this.total= this.storeService.getTotal();
  }

}
