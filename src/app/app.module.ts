import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//toastr
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
//router module used for setting up the applivcation level route
import {RouterModule,Routes} from '@angular/router';

import {FormsModule}  from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
//services
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,//this FormModule you can access in any component
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'about',component:AboutComponent},
      {path:'',redirectTo:'home', pathMatch:'full'},
      //blogId is the variable which is passed to the blog comopnent
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotFoundComponent}
    ]) 
  ],
  providers: [BlogService,BlogHttpService],//this line allo to access the service in entire appplication 
  //i.e it added the ervice in globLLY
  //providers: [BlogService,BlogHttpService] if u want access ur service globally add it in providers array
  bootstrap: [AppComponent]//load first component whrn
  //application is load i.e load shell page
})
export class AppModule { }
