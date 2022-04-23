import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent implements OnInit {

  courseId!: number;

  constructor(private activatedRoute: ActivatedRoute) { } // O construtor é onde fazemos sempre as injeções de dependencias
  // Injetando via injeções de dependencia a rota que esta ativa

  ngOnInit(): void {
    // Por padrão essa função retorna string, colocando o sinal de + convertemos para number
    this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    // Tirando uma fotografia da rota
  }

}
