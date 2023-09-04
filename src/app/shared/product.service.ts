import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

//add product using post method
  addListing(data:any){
    return this.http.post('http://localhost:3000/product',data).pipe(map((res:any)=>
    {
      return res;


    }))
  }
//get all product using get method
  getAllProd(){
    return this.http.get("http://localhost:3000/product").pipe(map((res:any)=>{
      return res;
    }))
  }

  updateProduct(data:any,id:number){
    return this.http.put('http://localhost:3000/product/'+id,data).pipe(map((res:any)=>{
      return res;
    }))

  }

  deleteProduct(id:number){
    return this.http.delete('http://localhost:3000/product/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
