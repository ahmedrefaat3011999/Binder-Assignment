import { Component } from '@angular/core';
import { Course } from '../../../models/Course';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseServicesService } from '../../../services/course-services.service';
import { NgFor, NgIf } from '@angular/common';
import { AddToCartComponent } from "../../list/add-to-cart/add-to-cart.component";
import { AddToWishComponent } from "../../list/add-to-wish/add-to-wish.component";
import { CreadCrumbComponent } from "../../layout/cread-crumb/cread-crumb.component";

@Component({
    selector: 'app-course-details',
    standalone: true,
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.scss',
    imports: [NgFor, NgIf, RouterLink, AddToCartComponent, AddToWishComponent, CreadCrumbComponent]
})
export class CourseDetailsComponent {
  CourseDetails!:Course
price:any
  constructor(private _ActivateRoute:ActivatedRoute ,private _GetCourseService:CourseServicesService){

  }

  ngOnInit(): void {

    this._GetCourseService.getData().subscribe(res=>{
      res.forEach((el:any)=>{
        if(el.id == this._ActivateRoute.snapshot.paramMap.get('id')){
          this.CourseDetails=el
          this.price = (el.actualPrice  * Number(el.discountPercentage)) / 100
        }
      })
    });
    if(this.CourseDetails){

    }
  }

}
