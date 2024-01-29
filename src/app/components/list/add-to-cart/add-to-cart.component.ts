import { Component, Input, input } from '@angular/core';
import { Course } from '../../../models/Course';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  cartCourse:any;
  @Input()
  courseDetails!: Course;

  addToCart(): void{
    this.cartCourse=[]
    if(localStorage.getItem('cart')){
      this.cartCourse=JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartCourse.find((item:any) => item.item?.id == this.courseDetails?.id)
      if(exist){
        alert('product is Already in the cart')
      }
      else{
        alert('product is added to the cart')
        this.cartCourse.push({item: this.courseDetails})
        localStorage.setItem('cart', JSON.stringify(this.cartCourse))
      }
    }else{
      this.cartCourse.push({item: this.courseDetails})
      localStorage.setItem('cart', JSON.stringify(this.cartCourse))
    }
  }
}
