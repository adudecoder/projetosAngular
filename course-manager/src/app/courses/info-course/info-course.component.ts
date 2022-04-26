import { CourseService } from './../courses.service';
import { Course } from './../courses';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent implements OnInit {

  course: Course

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { } // O construtor é onde fazemos sempre as injeções de dependencias
  // Injetando via injeções de dependencia a rota que esta ativa

  ngOnInit(): void {
    // Por padrão essa função retorna string, colocando o sinal de + convertemos para number
    this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
    // Tirando uma fotografia da rota
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log('Error', err)
    });
  }

}
