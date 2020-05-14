import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

//import observable related code
import {Observable} from 'rxjs/Observable'//rxjs is for handling http request
//htpp response is not a simple response it is a observable reponse
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  public authToken='?authToken=YjRhNmFjZTc2NGRiZjg1OTdlYTcwYjM2OTgyZTJjOWJkOGIzYTI1MTQ2ZTNhYjE2YjRhMzViNmI1NWNkY2E2MTAwYzk2M2YyZGE0ZjhiNDJiMmIwMDk5YzRiNGRlOTdlYzdlMjM5NDBiOWI4ZDQ3YjZmMWRhYjA2OWI3Mjg5Y2VlNA==';

  constructor(public _http:HttpClient) {
    console.log("blog-http service called...");

   }

   private handleError(err: HttpErrorResponse){
     console.log("handle error http call")
     console.log(err.message);
     return Observable.throw(err.message);
   }

   public getAllBlogs():any{
     let blogs = this._http.get(this.baseUrl+'/all'+this.authToken);
     //blogs is a observable type response of get method
     console.log("all blogs "+JSON.stringify(blogs));
     return blogs;
  }

  public getSingleBlogInformation(currentBlogId):any{
    ///view/:blogId
    let blog = this._http.get(this.baseUrl+'/view/'+currentBlogId+this.authToken)
    return blog;
 }

 public createBlog(blog):any{
   let postedBlog = this._http.post(this.baseUrl+'/create'+this.authToken,blog);
   return postedBlog;
 }

 public deleteBlog(blogId):any{
  let removedBlog = this._http.post(this.baseUrl+'/'+blogId+'/delete'+this.authToken,blogId);
  return removedBlog;
 }

 public editBlog(blogId,blog):any{
   let updatedBlog = this._http.put(this.baseUrl+'/'+blogId+'/edit'+this.authToken,blog)
   return updatedBlog;
 }

}
