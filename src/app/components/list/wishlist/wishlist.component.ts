import { Wishlist } from './../../../models/Course';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../../../models/Course';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddToCartComponent } from "../add-to-cart/add-to-cart.component";
import { CreadCrumbComponent } from "../../layout/cread-crumb/cread-crumb.component";

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.scss',
    imports: [NgClass, NgIf, CurrencyPipe, NgFor, AddToCartComponent, CreadCrumbComponent]
})
export class WishlistComponent {

  wishString:any = localStorage.getItem('wishlist');
  wish:Wishlist[]=[];
  constructor(private route:Router) {

  }

  ngOnInit(): void {
    // this.orders = JSON.parse(this.order) ? JSON.parse(this.order) : []
    this.addToCart()
  }

  addToCart():Observable<any>{
    return this.wish = JSON.parse(this.wishString) ? JSON.parse(this.wishString) : []
  }
  sum:any=0;




  Delete(item:any){
    let newCarts = this.wish.filter(el=>el.item.id !== item.id);
    localStorage.setItem('wishlist' , JSON.stringify(newCarts ));
    this.reload('/wishlist')
  }
   async reload(url: string): Promise<boolean> {
    await this.route.navigateByUrl('/', { skipLocationChange: true });
    return this.route.navigateByUrl(url);
  }
}
