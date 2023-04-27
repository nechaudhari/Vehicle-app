import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  
  public search = new BehaviorSubject<string>("");

  constructor() { }
}
