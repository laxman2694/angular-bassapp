# Baseapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Web Application Features
lazy loading
toaster
form validation
select multiple product and delete
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#app.component.html
this is the part of RouterModule
                <li><a [routerLink]="['/home']" >Home</a></li>


==============================================================
##Error of subscribe 
//i am assigning subscribe method return type not a response what i want  so i am getting the below
    //error
    /**
     * 
     * Cannot find a differ supporting object '[object Object]' of type 'object'. 
     * NgFor only supports binding to Iterables such as Arrays.
     */
    
    this.allBlogs = this.bloghttpService.getAllBlogs().subscribe(
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

     solution1)

     this.bloghttpService.getAllBlogs().subscribe(
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
slolution2)
 *ngIf="allBlogs.length>0"
==============================================================
observable need

while calling search API
case 1:
if we call API for every character than we will call one api many times
case 2: if user removing character
case 3: slow typing, fast typing

solution
case 1:
we can tell observable call api when user paused the typing


/**
 * <p *ngIf="currentBlog.tags.length!=undefined && currentBlog.tags.length>0">
        tags: <span *ngFor="let tag of currentBlog.tags;let first=first;let last=last">{{tag}}{{last?'':', '}}</span></p>
 */



 #error
error: true, message: "required parameters are missing", status: 403, data: null}
data: null
error: true
message: "required parameters are missing"
status: 403
------------------------

 solution:my wrong object filed {      title: this.blogTitle,      description: this.blogDescription,      blogBoday: this.blogBodyHtml,      category: this.blogCategory    }
correct obj filed
{      title: this.blogTitle,      description: this.blogDescription,      blogBody: this.blogBodyHtml,      category: this.blogCategory    }