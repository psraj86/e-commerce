import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './physical/add-product/add-product.component';
import { ProductListComponent } from './physical/product-list/product-list.component';



@NgModule({
  declarations: [AddProductComponent, ProductListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
