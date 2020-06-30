import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
 public subject= new Subject()
  constructor() { }
  sentMsg(product)
  {
   this.subject.next(product)
   console.log("added to cart")
  }
  getMsg():Observable<any>
  {
    console.log("get was called Observable")
  return this.subject.asObservable()
  }
}
