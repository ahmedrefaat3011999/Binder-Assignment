import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CartComponent } from './components/list/cart/cart.component';
import { WishlistComponent } from './components/list/wishlist/wishlist.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './components/auth/profile/profile.component';

export const routes: Routes = [
  {path:'' , redirectTo:'courses', pathMatch:'full'},
  {path:'courses' , component:CoursesComponent , canActivate:[authGuard]},
  {path:'courses/:id' , component:CourseDetailsComponent},
  {path:'cart' ,component:CartComponent},
  {path:'wishlist' ,component:WishlistComponent},
  {path:'signup' , component:SignupComponent},
  {path:'signin' , component:SigninComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'**' , redirectTo:'courses', pathMatch:'full'}
];
