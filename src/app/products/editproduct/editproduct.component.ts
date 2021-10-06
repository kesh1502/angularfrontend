import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model"
import { ProductService } from "../product.service"

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product = {
    name: '',
    id: 0,
    description:'',
    price:0,
  }

  edit = true;
  add = false;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  addProduct() {
    const data = {
      name: this.product.name,
      id: this.product.id,
      description: this.product.description,
      price: this.product.price,
    };
    this.productService.createProduct(data).subscribe(response => {
      console.log(response)
      this.getProducts();
    });
  }

  setProductEdit(product: Product) {
    this.product.name = product.name;
    this.product.id = product.id;
    this.product.description = product.description;
    this.product.price = product.price;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.product.name = "";
    this.product.id = 0;
    this.product.description = "";
    this.product.price = 0;
    this.edit = true;
    this.add = false;
  }

  removeProduct(product: Product) {
    const id = product.id;
    console.log(product)
    this.productService.deleteProduct(id).subscribe(product => console.log(product));
    this.getProducts()
  }

  updateProduct(){
    this.productService.editProduct(this.product).subscribe(response => console.log(response));
    this.getProducts()
    this.resetValues()
  }
}