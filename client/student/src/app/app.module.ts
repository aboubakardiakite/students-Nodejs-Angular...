import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentsViewComponent } from './students-view/students-view.component';
import { Routes,RouterModule } from '@angular/router';





const appRoutes: Routes =[
  { path: 'Etudiants',component: StudentsViewComponent},




];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentViewComponent,
    StudentsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
