import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  data: any = "";
  baseUrl = "https://localhost:7061/api/";
  show = true;
  constructor(http: HttpClient, private productList: ProductservicesService) {
    http.get(this.baseUrl + "Services/GetAbout").subscribe(result => {
      console.log(result);
      this.data = result;
    })
  }

  toggel() {
    this.show = !this.show
  }
}
