import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';



@NgModule({
  declarations: [
    ProductListComponent,
    CreateproductComponent,
    EditproductComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
