import { Course } from './../../../models/Course';
import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddToCartComponent } from '../../list/add-to-cart/add-to-cart.component';
import { WishlistComponent } from "../../list/wishlist/wishlist.component";
import { AddToWishComponent } from '../../list/add-to-wish/add-to-wish.component';

@Component({
    selector: 'app-course',
    standalone: true,
    templateUrl: './course.component.html',
    styleUrl: './course.component.scss',
    imports: [NgIf, NgFor, RouterModule, AddToCartComponent,
              NgClass, WishlistComponent,AddToWishComponent
             ]
})
export class CourseComponent {
  @Input()
  course!: Course;

  constructor(){

  }
  ngOnInit(){
  }
}
