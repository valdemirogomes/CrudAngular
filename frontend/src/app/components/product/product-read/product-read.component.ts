import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  product!: Product
  products!: Product[];
  displayedColumns = ['id', 'name','price','action']

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products=>{
      this.products = products
      console.log(products) 
    })
  }


  readName(): void{
        
    this.productService.readByName(this.product).subscribe(()=>{
      this.productService.showMessage('Produto encontrado')
      this.router.navigate(['/products'])
      console.log(this.product)
      console.log(this.product)
    })
  


  }
  
}
