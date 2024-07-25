import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
  productList: any[] = [{ name: "hoes", price: 500, color: "red" },
    { name: "table", price: 300, color: "green" },
    {name:"moblid",price:2500,color:"gold"}
  ]

  constructor() { }
}
