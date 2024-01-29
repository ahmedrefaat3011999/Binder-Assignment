import { CanActivateFn, ActivatedRoute } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('userToken')){
    console.log('a')
      return true
    }
    else{
      console.log('b')
      return false;

    }
};
