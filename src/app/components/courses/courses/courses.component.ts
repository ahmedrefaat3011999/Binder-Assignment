import { Component } from '@angular/core';
import { Course } from '../../../models/Course';
import { CourseServicesService } from '../../../services/course-services.service';
import { CourseComponent } from '../course/course.component';
import { NgFor, NgIf } from '@angular/common';
import { CreadCrumbComponent } from "../../layout/cread-crumb/cread-crumb.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-courses',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [CourseComponent, NgFor, CreadCrumbComponent,ReactiveFormsModule , NgIf , NgxPaginationModule]
})
export class CoursesComponent {
  courses:Course[]=[]
  sorted:Course[]=[]

  search:FormGroup = new FormGroup({
    'cname' : new FormControl('' ,[Validators.required]),
     })

tableSize: number[] = [5, 10, 15, 20];
pagingConfig: any = {} ;
constructor( private _GetCourseService:CourseServicesService){

  }



  ngOnInit(): void {

    this._GetCourseService.getData().subscribe(res => {
      this.courses = res;
      this.sorted =res
      this.pagingConfig.totalItems = res.length;
    })
  }


  public sortProductsDesc(): void {
    this.sorted = this.courses.sort((a, b) => a.actualPrice - b.actualPrice);
  }

  public sortProductsAsc() {
    this.sorted = this.courses.sort((a, b) => b.actualPrice - a.actualPrice);
  }
  public reset() {
    this._GetCourseService.getData().subscribe(res => {
      this.sorted =res
    })
  }
  filterBy(nameInput: HTMLInputElement) {
    if (nameInput.value) {
      this.sorted = this.courses.filter(p => p.courseName.toLowerCase().includes(nameInput.value.toLowerCase()))
    }else{
        this.sorted =this.courses
    }
  }
  filterBy2(nameInput: HTMLInputElement) {
    if (nameInput.value) {
      this.sorted = this.courses.filter(p => p.author.toLowerCase().includes(nameInput.value.toLowerCase()))
    }else{
        this.sorted =this.courses
    }
  }
  courseName:boolean=false
  cname(){
    this.courseName=!this.courseName
  }
  author:boolean=false
  aname(){
    this.author=!this.author
  }
}
