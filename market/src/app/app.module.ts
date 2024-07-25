import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ProductPosComponent } from './product-pos/product-pos.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    ServicesComponent,
    AboutusComponent,
    ProductlistComponent,
    ContactUsComponent,
    ProductPosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
