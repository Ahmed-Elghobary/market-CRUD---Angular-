import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-pos',
  templateUrl: './product-pos.component.html',
  styleUrl: './product-pos.component.css'
})
export class ProductPosComponent {

  model:any = {id:0,categoryId:0,name:"",price:"",qty:"",description:"",photo:""}
  baseUrl = "https://localhost:7061/api/";
  cats: any[] = [];
  products: any[]=[];
  customers: any[]=[];
  message: string="";
  progress: any;
  fileToUpload: any;
  imageName: any;
  mode: string="create";
  imageBaseUrl: string = 'https://localhost:7061/';
  constructor(private xhttp: HttpClient) {




    xhttp.get(this.baseUrl + "Product/getCats")
      .subscribe(result => {
        console.log(result);
        this.cats = result as any[];
      });



      this.xhttp.get(this.baseUrl + "Product/getAllProducts/")
      .subscribe(result => {

        this.products = result as any[];

      })

      xhttp.get(this.baseUrl + "Services/getCustomer")
      .subscribe(result => {
        console.log(result);
        this.customers = result as any[];
      });
}
changeCategory(event:any){
console.log("targeet" +event.target.value);
this.model.categoryId=event.target.value;
}

changeCutegoryPop(item:any){
this.model.categoryId=item.id;
}


uploadFile = (files:any) => {
  if (files.length === 0) {
    return;
  }
  this.fileToUpload = <File>files[0];
 this.imageName= this.fileToUpload.name;
}

Save(){

  if (!this.fileToUpload) {
    this.message = 'No file selected.';
    return;
  }
  const formData = new FormData();
  formData.append('file',this. fileToUpload, this.fileToUpload.name);
  formData.append('name',this.model.name);
  formData.append('qty',this.model.qty);
  formData.append('description',this.model.description);
  formData.append('categoryId',this.model.categoryId);


  if(this.mode=="create"){
 this.xhttp.post(this.baseUrl+"Upload/uploadFile", formData, {reportProgress: true, observe: 'events'})
    .subscribe({
      next: (event) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total!);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';


      this.xhttp.get(this.baseUrl + "Product/getAllProducts/")
      .subscribe(result => {

        this.products = result as any[];

      })

      }
    },
    error: (err: HttpErrorResponse) => console.log(err)
  });
  }
  else if(this.mode=="edit"){
     this.xhttp.post(this.baseUrl+"Upload/UpdateProduct", formData, {reportProgress: true, observe: 'events'})
    .subscribe({
      next: (event) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total!);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';


      this.xhttp.get(this.baseUrl + "Product/getAllProducts/")
      .subscribe(result => {

        this.products = result as any[];

      })

      }
    },
    error: (err: HttpErrorResponse) => console.log(err)
  });
  }

}


getFullImageUrl(relativePath: string): string {
  return this.imageBaseUrl + relativePath;
}
Delete(item:any){
  this.xhttp.get(this.baseUrl + "Product/Delete/"+item.id)
  .subscribe(result => {

    item.IsDeleted=true;


  });
}

Edit(item:any){
this.model=item;
this.mode="edit";
 (<HTMLInputElement> document.getElementById("s1")).value=item.categoryId.toString();
}

Cancel(){
  this.mode="create";
  this.model=  {id:0,categoryId:0,name:"",price:"",qty:"",description:"",photo:""};
}



ChangeClass(item: any): string {
  if (item.id == this.model.categoryId) {
    return 'alert-success col mr-2 mb-2 pt-5 pb-5 text-center';
  } else {
    return 'alert-danger col mr-2 mb-2 pt-5 pb-5 text-center';
  }
}

}
