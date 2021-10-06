import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent {
  
  blogs=[
    { id: 11, title: 'Seaman Cap', description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae'},
    { id: 21, title: 'T-shirt', description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit '},
    { id: 31, title: 'Back Pack', description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae'},
    { id: 41, title: 'Back Pack', description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae'}
  ];
}