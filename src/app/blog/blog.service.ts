import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'api/blog/';
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createBlog(blog: Blog): Observable<Blog> {
    blog.id = blog.id+1;
    return this.http.post<Blog>(this.blogUrl, blog).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editBlog(blog: Blog): Observable<any> {
    return this.http.put(this.blogUrl + blog.id, blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(this.blogUrl + id);
  }
}