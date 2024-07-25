import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})


export class ServicesComponent {
  data: any = "";
  baseUrl = "https://localhost:7061/api/";
  constructor(http: HttpClient) {
    http.get(this.baseUrl + "Services/getServices").subscribe(result => {
      console.log(result);
      this.data = result;
    })

  }
}


