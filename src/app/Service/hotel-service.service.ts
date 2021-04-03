import { Injectable } from '@angular/core';
 
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  dbPath = '/HotelsList';

  hotelRef: AngularFireList<any> ;
  
  getInfoList() {
    return this.hotelRef
  }

  constructor(private db: AngularFireDatabase) { 
    this.hotelRef = db.list(this.dbPath)
  }

  addHotel(hotelObject:any) {
    this.db.list(this.dbPath).push(hotelObject)
  }

  removeHotel(personhotelId:any){
    this.db.list(this.dbPath).remove(personhotelId)
  }

  updateHotel(hotelObject:any) {
    this.db.list(this.dbPath).update(hotelObject.id, hotelObject)
  }

  getHotel(hotelKey:any) {
    return this.db.object(this.dbPath + '/' + hotelKey)
  }
}
