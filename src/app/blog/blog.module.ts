import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { EditblogComponent } from './editblog/editblog.component';

@NgModule({
  declarations: [
    BlogListComponent,
    CreateblogComponent,
    EditblogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BlogListComponent]
})
export class BlogModule { }
