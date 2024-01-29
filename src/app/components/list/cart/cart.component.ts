import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../../../models/Course';
import { CreadCrumbComponent } from "../../layout/cread-crumb/cread-crumb.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [NgIf, ReactiveFormsModule, CurrencyPipe, FormsModule, NgFor, CreadCrumbComponent]
})
export class CartComponent {

  cartString:any = localStorage.getItem('cart');
  carts:Cart[]=[];
  msg:boolean=false;
  constructor(private route:Router) {

  }
price:number=0
  ngOnInit(): void {
    // this.orders = JSON.parse(this.order) ? JSON.parse(this.order) : []
    this.addToCart()
    this.showTotal()
  }

  addToCart():Observable<any>{
    return this.carts = JSON.parse(this.cartString) ? JSON.parse(this.cartString) : []
  }

  sum:any=0;


  showTotal() {
    this.sum = this.carts.reduce((acc, curr) => acc + (curr.item.actualPrice - (curr.item.actualPrice * curr.item.discountPercentage)/100), 0);
 }

  Delete(item:any){
    let newCarts = this.carts.filter(el=>el.item.id !== item.id);
    localStorage.setItem('cart' , JSON.stringify(newCarts ));
    this.reload('/cart')
  }
   async reload(url: string): Promise<boolean> {
    await this.route.navigateByUrl('/', { skipLocationChange: true });
    return this.route.navigateByUrl(url);
  }
}

