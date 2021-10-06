import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateproductComponent } from './products/createproduct/createproduct.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { path: 'products', component: ProductListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'products/create' },
    { path: 'products/create', component: CreateproductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'products/edit' },
    { path: 'products/edit', component: EditproductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'blog' },
    { path: 'blog', component: BlogListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }