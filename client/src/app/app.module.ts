import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsViewComponent } from './students-view/students-view.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './service/students.service';
import { GroupesViewsComponent } from './groupes-views/groupes-views.component';
import { AcceuilComponent } from './acceuil/acceuil.component';






const appRoutes: Routes =[
  { path: 'etudiant',component: StudentsViewComponent},
   {path :'groupe',component:GroupesViewsComponent},
   {path:'home',component:AcceuilComponent},
   {path : "",component : AcceuilComponent},
   {path :"**", redirectTo : ""},








];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsViewComponent,
    GroupesViewsComponent,
    AcceuilComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule



  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

