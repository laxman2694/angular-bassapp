import { Component, OnInit, OnDestroy,ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, Route} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Location} from '@angular/common';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
//ActivatedRoute is used 2 get the varible which is
//passed to the view component
@Component({ 
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]//this is the local providers array which cotain
  //Location service, but you can add globally Location service but every web page not
  //required  the Location service
})
export class BlogViewComponent implements OnInit, OnDestroy {
  
  public currentBlog;
  constructor(private _route: ActivatedRoute, private router:Router, private bloghttpService: BlogHttpService
    ,public toastr: ToastsManager, vcr: ViewContainerRef, private location: Location) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    //getting the blogid from the route
    let blogId = this._route.snapshot.paramMap.get('blogId'); 
    console.log("Id",blogId);
    this.currentBlog = this.bloghttpService.getSingleBlogInformation(blogId).subscribe(
      data =>{
        console.log("blog data loading...");
        console.log(data);
        this.currentBlog=data["data"];
      },
        error =>{
          console.log("some error...");
          console.log(error.errorMessage);
        }
      
    )
    console.log("Id",this.currentBlog);
        
  }

  public deleteThisBlog():any{
    this.bloghttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
        this.toastr.success("Blog Deleted Successfully",'sucess');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },2000)
      },
      error=>{  console.log('some error occured...');
      console.log(error.errorMessage);
      //alert('error'+error.errorMessage);
      this.toastr.error(error.errorMessage+'!', 'Oops!');


      }
    )
  }

  public goBackTopreviousPage():any{
    this.location.back();
  }

  ngOnDestroy(){
    console.log('onde strory blog view')
  }
 

}
