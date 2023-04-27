import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterType: any;
  searchKey:string="";

  constructor(private api: ApiService, private cartService: CartService){}

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterType = res;
      this.productList.forEach((a:any)=>{
        if(a.type ==='two'){
          a.type = 'two'
        }
        console.log(this.productList)
      });

    });
    this.cartService.search.subscribe(val=>{
      this.searchKey = val;
    })
      
  }

  filter(type:string){
    this.filterType = this.productList
    .filter((a:any)=>{
      if(a.type ==type || type==''){
        return a;
      }
    })

  }
}
