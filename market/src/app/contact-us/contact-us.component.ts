import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  model: Contact = new Contact();
  data: any = "";
  baseUrl = "https://localhost:7061/api/";
  products:any[]=[];
  contact: any;
  constructor(private xhttp: HttpClient, private productList: ProductservicesService) {

    this.productList

    this.xhttp.get(this.baseUrl + "Services/getContact").subscribe(result => {
      this.contact = result;
    }, error => { console.log("error occure") })
  }

  Save() {

    if (!this.model.email) {
      alert("insert Email")
      return;
    }
    this.xhttp.post(this.baseUrl + "Services/SaveContact", this.model).subscribe(result => {
      alert("تم الحفظ بنجاح");

      this.products = this.productList.productList;
      this.xhttp.get(this.baseUrl + "Services/getContact").subscribe(result => {
        this.contact = result;
      }, error => { console.log("error occure") })
      console.log(result);

      this.model = new Contact();
      this.data = result;

    })
  }
}
export class Contact {
  name: string="";
  email: string="";
  subject: string="";
  message: string="";
}
