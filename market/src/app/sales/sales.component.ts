import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

interface Customer {
  ssn: string;
  name: string;
  age: string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'] // Fixed typo here
})
export class SalesComponent  {
  baseUrl = "https://localhost:7061/api/";
  cats: any[] = [];
  products: any[]=[];

  constructor(private xhttp: HttpClient) {
    xhttp.get(this.baseUrl + "Product/getCats")
      .subscribe(result => {
        console.log(result);
        this.cats = result as any[];
      });



      this.xhttp.get(this.baseUrl + "Product/getProducts/")
        .subscribe(result => {

          this.products = result as any[];
          console.log(result);
        })


  }
  getProducts(catId: number) {

    this.xhttp.get(this.baseUrl + "Product/getProductByCatId/"+catId)
      .subscribe(result => {

        this.products = result as any[];
        console.log(result);
      })
    console.log(catId)
  }

}
