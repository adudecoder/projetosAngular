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

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    RouterModule.forRoot([ // espera um array de objetos do tipo rotas
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // Rota que corresponde a raiz da aplicação
      },
      {
        path: 'courses', component: CourseComponent // Rota de redirecionamento
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
