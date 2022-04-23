import { ReplacePipe } from './pipe/replace.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses/courses.component';
import { StarComponent } from './star/star.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { InfoCourseComponent } from './courses/info-course/info-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    Error404Component,
    InfoCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    RouterModule.forRoot([ // espera um array de objetos do tipo rotas
      {
        path: 'courses', component: CourseComponent // Rota de redirecionamento
      },
      {
        path: 'courses/info/:id', component: InfoCourseComponent // Rota de informações dos cursos
      }, // Informando o Angular que essa rota recebe um id
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // Rota que corresponde a raiz da aplicação
      },
      {
        path: '**', component: Error404Component // Rota caso ele não encontre as rotas iniciais
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
