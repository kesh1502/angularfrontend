import { Component, OnInit } from '@angular/core';
import { Blog } from "../blog.model"
import { BlogService } from "../blog.service"
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {  

  blog = {
    id: 0,
    title: '',
    description:'',
  }

  edit = true;
  add = false;
  blogs: Blog[]=[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  private getBlogs() {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }

  addBlog() {
    const data = {
      id: this.blog.id,
      title: this.blog.title,
      description: this.blog.description,
    };
    this.blogService.createBlog(data).subscribe(response => {
      console.log(response)
      this.getBlogs();
    });
  }

  setBlogEdit(blog: Blog) {
    this.blog.id = blog.id,
    this.blog.title = blog.title;
    this.blog.description = blog.description;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.blog.title = "";
    this.blog.id = 0;
    this.blog.description = "";
    this.edit = true;
    this.add = false;
  }

  removeBlog(blog: Blog) {
    const id = blog.id;
    console.log(blog)
    this.blogService.deleteBlog(id).subscribe(blog => console.log(blog));
    this.getBlogs()
  }

  updateProduct(){
    this.blogService.editBlog(this.blog).subscribe(response => console.log(response));
    this.getBlogs()
    this.resetValues()
  }
}