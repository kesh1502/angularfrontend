import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model"
import { ProductService } from "../product.service"
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})


export class CreateproductComponent implements OnInit {

  product = {
    name: '',
    id: 0,
    description:'',
    price:0,
  }

  edit = true;
  add = false;
  products: Product[] = [];

  constructor(private productService: ProductService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  profileForm = this.fb.group({
    id: ['', Validators.required],
    name: [''],
    description: [''],
    price: ['']
    });

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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


}
