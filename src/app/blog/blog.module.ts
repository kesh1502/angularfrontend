import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BlogListComponent]
})
export class BlogModule { }
