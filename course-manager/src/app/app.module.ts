import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses/courses.component';
import { StarComponent } from './shared/components/star/star.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { Error404Component } from './core/components/error404/error404.component';
import { InfoCourseComponent } from './courses/info-course/info-course.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    RouterModule.forRoot([ // espera um array de objetos do tipo rotas
      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // Rota que corresponde a raiz da aplicação
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
