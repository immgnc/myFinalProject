import { Injectable } from '@angular/core';
 
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor() { }
 

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   dbPath = '/productsArray';

//  productRef: AngularFireList<any> = null;

//   getInfoList() {
//     return this.productRef
//   }

//   constructor(private db: AngularFireDatabase) { 
//     this.productRef = db.list(this.dbPath)
//   }

//   addProduct(productObject) {
//     this.db.list(this.dbPath).push(productObject)
//   }

//   removeProduct(personproductId){
//     this.db.list(this.dbPath).remove(personproductId)
//   }

//   updatePerson(productObject) {
//     this.db.list(this.dbPath).update(productObject.id, productObject)
//   }

//   getProduct(productKey) {
//     return this.db.object(this.dbPath + '/' + productKey)
//   }
}
