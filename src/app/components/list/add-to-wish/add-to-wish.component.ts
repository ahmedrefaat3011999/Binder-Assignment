import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../../../models/Course';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-to-wish',
  standalone: true,
  imports: [NgIf],
  templateUrl: './add-to-wish.component.html',
  styleUrl: './add-to-wish.component.scss'
})
export class AddToWishComponent {

  wishCourse:any;
  @Input()
  courseDetails!: Course;
  @Input()
  detail: boolean = true;
  WishlistString:any = localStorage.getItem('wishlist');
  Wishliststr:any
  constructor(private route:Router){
    this.wish()
    console.log(this.wish())
  }

  wish():Observable<any> {
    return this.Wishliststr = JSON.parse(this.WishlistString) ? JSON.parse(this.WishlistString) : []
  }

wishlist() {
  this.wishCourse=[]
  this.courseDetails.isListed = true
  this.Wishliststr = JSON.parse(this.WishlistString)

  console.log(this.Wishliststr)
  if(localStorage.getItem('wishlist')){
    this.wishCourse=JSON.parse(localStorage.getItem('wishlist')!);
    let exist = this.wishCourse.find((item:any) => item.item?.id == this.courseDetails?.id)
    if(exist){
      alert('already exist')
    }
    else{
      this.wishCourse.push({item: this.courseDetails})
      localStorage.setItem('wishlist', JSON.stringify(this.wishCourse))
      alert('Added !')
    }
  }else{
    this.wishCourse.push({item: this.courseDetails})
    localStorage.setItem('wishlist', JSON.stringify(this.wishCourse))
  }
}
Delete(item:any){
  let newCarts = this.wishCourse.filter((el: { item: { id: any; }; }) =>el.item.id !== item.id);
  localStorage.setItem('wishlist' , JSON.stringify(newCarts ));
  item.isListed=false
  // this.reload(' ')
}
 async reload(url: string): Promise<boolean> {
  await this.route.navigateByUrl('/', { skipLocationChange: true });
  return this.route.navigateByUrl(url);
}
}
