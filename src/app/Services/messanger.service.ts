import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
 public subject= new Subject()
  constructor() { }
  sentMsg(product)
  {
   this.subject.next(product)
  }
  getMsg()
  {
  return this.subject.asObservable()
  }
}
