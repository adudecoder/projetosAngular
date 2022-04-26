import { CourseService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './courses';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CourseComponent implements OnInit {

  // Criar variavel com anderlaine na frente para avisar os dev que eu quero que essa variavel fique apenas nesse component
  filteredCourses: Course[] = [];

  _courses: Course[] = [];
    
  _filterBy!: string;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void { 
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    })
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) { 
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() { 
    return this._filterBy;
  }

}
