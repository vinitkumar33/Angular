import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
   // selector: 'pm-products', Dont need this as we are using routing and removing pm-products from app.component.ts template
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'cart1';
    errorMessage: string = '';

    _listFilter = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[] = [];

    constructor(private productService: ProductService) {
      //this.filteredProducts = this.products;
      //this.listFilter = 'cart'
    }

    products: IProduct[] = [
            /*Commenting to be able to use productservice to get this data {
              "productId": 1,
              "productName": "Leaf Rake",
              "productCode": "GDN-0011",
              "releaseDate": "March 19, 2016",
              "description": "Leaf rake with 48-inch wooden handle.",
              "price": 19.95,
              "starRating": 3.2,
              "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
              "productId": 2,
              "productName": "Garden Cart",
              "productCode": "GDN-0023",
              "releaseDate": "March 18, 2016",
              "description": "15 gallon capacity rolling garden cart",
              "price": 32.99,
              "starRating": 4.2,
              "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }*/
    ];

    toggleImage(): void  {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      //this.products = this.productService.getProducts(); This is when we are directly retuning array form the service and not using observable
      this.productService.getProducts().subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
          this.listFilter = 'cart';
        },
        error => this.errorMessage = <any>error
      );
      //this.filteredProducts = this.products;
      //this.listFilter = 'cart'
      //console.log('In ng On Init');
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}