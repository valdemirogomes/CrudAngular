
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = "http://localhost:3001/products";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })

  }

  create(product: Product): Observable <Product>{

    return this.http.post<Product>(this.baseURL, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL)

  }

  readById(id: any): Observable<Product>{
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url)
  }

  delete(id: any): Observable<Product>{
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(url, product)
  }

}
