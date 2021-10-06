import { Component, OnInit } from '@angular/core';
import { Blog } from "../blog.model"
import { BlogService } from "../blog.service"

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blog = {
    id: 0,
    title: '',
    description:'',
  }

  edit = true;
  add = false;
  blogs: Blog[]=[];

  constructor(private BlogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  private getBlogs() {
    this.BlogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }

  addBlog() {
    const data = {
      id: this.blog.id,
      title: this.blog.title,
      description: this.blog.description,
    };
    this.BlogService.createBlog(data).subscribe(response => {
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
    this.BlogService.deleteBlog(id).subscribe(blog => console.log(blog));
    this.getBlogs()
  }

  updateProduct(){
    this.BlogService.editBlog(this.blog).subscribe(response => console.log(response));
    this.getBlogs()
    this.resetValues()
  }
}