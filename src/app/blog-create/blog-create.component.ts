import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories=["comedy","Drama","Action","Technology"]
  constructor(private blogHttpService: BlogHttpService, private activatedRoute: ActivatedRoute, private router: Router
    ,public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
  }

  public createBlog():any {
    let blogData ={
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }
    console.log("local object...."+JSON.stringify(blogData));

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created...");
        console.log("blog data.............",data);
       // alert("blog created sucessfully..."); 
       this.toastr.success('Blog created sucessfully!', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },4000)

      },
      error =>{
        console.log('some error occured...');
        console.log(error.errorMessage);
        //alert('error'+error.errorMessage);
        this.toastr.error(error.errorMessage+'!', 'Oops!');
      }
    )
  }

}
