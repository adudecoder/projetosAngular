import { AppPipeModule } from './../shared/pipes/app.pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { StarComponent } from '../shared/components/star/star.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InfoCourseComponent } from './info-course/info-course.component';
import { CourseComponent } from './courses.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../shared/pipes/replace.pipe';

@NgModule({
    declarations: [
        CourseComponent,
        InfoCourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseComponent // Rota de redirecionamento
            },
            {
                path: 'courses/info/:id', component: InfoCourseComponent // Rota de informações dos cursos
            } // Informando o Angular que essa rota recebe um id
        ])
    ]
})
export class CourseModule {

}