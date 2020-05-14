import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.585Z",
      "created":"2017-10-20T12:20:47.585Z",
      "tags":['iron man','iron man 2','iron man 3','iron man 4','Avengars'],
      "author":"Admin",
      "category":true,
      "views":0,
      "bodyHtml": "this is the body html",
      "description":" dfhk kjbfg kjsebhg",
      "title": "thuis is the blog"
    },
    {
      "blogId":"2",
      "lastModified":"2017-10-20T12:20:47.585Z",
      "created":"2017-10-20T12:20:47.585Z",
      "tags":[],
      "author":"Admin",
      "category":true,
      "views":0,
      "bodyHtml": "<h1> thidd is the tstx</h1><p>body html</p>",
      "description":" dfhk kjbfg kjsebhg",
      "title": "thuis is the blog"
    },
    {
      "blogId":"3",
      "lastModified":"2017-10-20T12:20:47.585Z",
      "created":"2017-10-20T12:20:47.585Z",
      "tags":[],
      "author":"Admin",
      "category":true,
      "views":0,
      "bodyHtml": "this is the body html",
      "description":" dfhk kjbfg kjsebhg",
      "title": "thuis is the blog"
    }
  ];

  public currentBlog;
  constructor() {
    console.log("service constructor.....")
   }

   public getAllBlogs():any{
     return this.allBlogs;
   }

   public getSingleBlogInformation(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(blog.blogId === currentBlogId){
        this.currentBlog=blog;
        return this.currentBlog;

      }
    }
  }

}
