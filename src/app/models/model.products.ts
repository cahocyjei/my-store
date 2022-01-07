export interface Category{
  id:number;
  name:string;
  typeImg:string;
}

export interface Product {
  id:number;
  title:string;
  images:string[];
  price:number;
  description:string;
  category:Category;
  taxes?:number;
}
export interface createProductDTO extends Omit<Product,'id' | 'category'>{
  categoryId:number;

}
export interface UpdateProductDTO extends Partial<createProductDTO>{}

