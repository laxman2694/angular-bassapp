import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories=["comedy","Drama","Action","Technology"];

  constructor(private _route: ActivatedRoute, private router:Router, private bloghttpService: BlogHttpService
    ,public toastr: ToastsManager, vcr: ViewContainerRef) {
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

  public editThisBlog():any{
    this.bloghttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log(data);
        this.toastr.success("Blog Edit Successfully",'sucess');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },2000)
      },
      error=>{  console.log('some error occured...');
      console.log(error.errorMessage);
      //alert('error'+error.errorMessage);
      this.toastr.error(error.errorMessage+'!', 'Oops!');


      }
    )
  }

  ngOnDestroy(){
    console.log('onde strory blog view')
  }
 


}
