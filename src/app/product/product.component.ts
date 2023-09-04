import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../shared/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProduct:any;
  formValue!:FormGroup;
  productModelObj: Product= new Product();
  showAdd!:boolean;
  showEdit!:boolean;

  constructor(private fb:FormBuilder, private api:ProductService){}

  ngOnInit():void{
    this.formValue=this.fb.group({

      pname:[''],
      pcategory:[''],
      pdiscription:[''],
      pprice:[''],
      pdiscount:[''],
      pfinalprice:['']

    })
    this.getAllProduct()

  }
  clickAddProduct(){
    this.formValue.reset();
    this.showAdd=true;
    this.showEdit=false;
  }

  getAllProduct(){
    this.api.getAllProd().subscribe((res)=>{
      this.allProduct=res;
      console.log(this.allProduct);
    })
  }

  addProduct(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pcategory = this.formValue.value.pcategory;
    this.productModelObj.pdiscription = this.formValue.value.pdiscription;
    this.productModelObj.pprice = this.formValue.value.pprice;
    this.productModelObj.pdiscount = this.formValue.value.pdiscount;
    this.productModelObj.pfinalprice = this.formValue.value.pprice-(this.formValue.value.pprice*(this.formValue.value.pdiscount/100));
    this.api.addListing(this.productModelObj).subscribe(
      (res)=>{
      console.log(res);
      alert("Product Added Successfully !!❤😊❤")
      let ref = document.getElementById('clear');
      ref?.click()

      this.formValue.reset();
      this.getAllProduct();
    },
    err=>{
      alert('Something Went Wrong!!')
    })
  }


  deletePro(id:number){
    if(confirm("Are you sure you want to delete?")){


    this.api.deleteProduct(id).subscribe((res)=>{
      alert("Product deleted!!😊");
      this.getAllProduct();
    });
  }

  }

  editProduct(data:any){
    this.showAdd=false;
    this.showEdit=true;
   this.productModelObj.id = data.id;
   this.formValue.controls['pname'].setValue(data.pname);
   this.formValue.controls['pcategory'].setValue(data.pcategory);
   this.formValue.controls['pdiscription'].setValue(data.pdiscription);
   this.formValue.controls['pprice'].setValue(data.pprice);
   this.formValue.controls['pdiscount'].setValue(data.pdiscount);
 }
  updatePro(){
    this.showAdd=false;
    this.showEdit=true;

    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pcategory = this.formValue.value.pcategory;
    this.productModelObj.pdiscription = this.formValue.value.pdiscription;
    this.productModelObj.pprice = this.formValue.value.pprice;
    this.productModelObj.pdiscount = this.formValue.value.pdiscount;
    this.productModelObj.pfinalprice = this.formValue.value.pfinalprice;

    this.api.updateProduct(this.productModelObj,this.productModelObj.id).subscribe((res:any)=>{
      alert("product updated Successfully 😍");
      let ref = document.getElementById('clear');
      ref?.click()
      this.formValue.reset();
      this.getAllProduct();

    });


  }

}
