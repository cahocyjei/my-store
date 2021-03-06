import { Component, OnInit} from '@angular/core';
import { createProductDTO, Product,UpdateProductDTO} from '../../models/model.products'
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
  showProductsDetails= false;

  productChosen: Product = {
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

  myProducts:Product[]=[]

  constructor(private storeService:StoreService,private productsService:ProductsService) {
    this.myShoppingCart= this.storeService.getMyShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getProductByPage(10, 0)
    .subscribe(data=>{
      this.myProducts=data;
    })
  }

  addToShoppingCart(product:Product){
    this.storeService.addProductShoppingCart(product);
    this.total= this.storeService.getTotal();
  }

  toggleProductsDetails(){
    this.showProductsDetails= !this.showProductsDetails;
  }
  onShowDetail(id:number){
    this.productsService.getProductById(id)
    .subscribe(data=>{
      this.toggleProductsDetails()
      this.productChosen= data;
    })
  }
  createProduct(){
    const product:createProductDTO= {
      title:'Nuevo Producto',
      images:[`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price:1000,
      categoryId:2,
      description:'Este es un producto fenomenal'

    }
    this.productsService.create(product)
    .subscribe(data=>{
      this.myProducts.unshift(data);
    })
  }

  updateProduct(){
    const product:UpdateProductDTO={
      title:"ahí fue"
    }
    const id= this.productChosen.id;
    this.productsService.update(id,product)
    .subscribe(data=>{
      const productIndex = this.myProducts.findIndex(item=>item.id === this.productChosen.id);
      this.myProducts[productIndex]= data;
    })
  }
  deleteProduct(){
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(()=>{
      const productIndex= this.myProducts.findIndex(item=>item.id === this.productChosen.id);
      this.myProducts.splice(productIndex,1);
      this.showProductsDetails= false;

    })
  }
}



