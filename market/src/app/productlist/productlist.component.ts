import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  id: number = 0;
  product:any = {};

  photo = {};
  baseUrl = "https://localhost:7061/api/";
  constructor(private route: ActivatedRoute, private http: HttpClient) {


    this.route.params.subscribe(result => {
   this.id = result['id'];

      console.log(result['id']);
      this.http.get(this.baseUrl +"Product/getProductById/"+this.id).subscribe(result => {

        this.product = result;
        console.log(this.product);
      });
    })
    console.log(this.route);
}
}
