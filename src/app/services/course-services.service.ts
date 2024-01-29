import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServicesService {

  constructor( private _HttpClient:HttpClient) { }

  getData():Observable<any> {
    return this._HttpClient.get('../../assets/db/data.json');
  }
  getCourseDetails(id:any){
    return this.getData().subscribe(res =>{
      res.forEach((el:any) => {
        if(el.id === id){
          return el;
        }
      })
    })
  }
}
