import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsModule} from "./products/products.module"
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CreateproductComponent } from './products/createproduct/createproduct.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { CreateblogComponent } from './blog/createblog/createblog.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/create', component: CreateproductComponent },
  { path: '', redirectTo: '/products/create', pathMatch: 'full' },
  { path: 'products/edit', component: EditproductComponent },
  { path: '', redirectTo: '/products/edit', pathMatch: 'full' },
  { path: 'blog', component: BlogListComponent },
  { path: '', redirectTo: 'blog', pathMatch: 'full'},
 // { path: 'blog/create', component: CreateblogComponent },
  //{ path: '', redirectTo: '/blog/create', pathMatch: 'full'},
    
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ProductsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
