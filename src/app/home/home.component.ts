import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // providers:[BlogService]// HERE, second instance of service is created. if u want 
  //but actually we need only one instance of service
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public allBlogs;
  constructor(public bloghttpService: BlogHttpService ) {
    console.log("home costructor")

   }

  ngOnInit() {
    console.log('onnginit called')
    
   this.allBlogs =  this.bloghttpService.getAllBlogs().subscribe(
      data =>{
        console.log("blog data loading...");
        console.log(data);
        this.allBlogs=data["data"];
      },
        error =>{
          console.log("some error...");
          console.log(error.errorMessage);
        }
      
    )
    console.log("blogs",this.allBlogs)
  }

  ngOnDestroy(){
    console.log('onde strory home')
  }

}
