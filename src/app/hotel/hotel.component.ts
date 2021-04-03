import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HotelServiceService } from '../Service/hotel-service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  ngOnInit(): void {
    this.getHotelList();
  }

  hotel = {
    hotelName: '',
    address: '',
    city: '',
    starNumber: 0,
    RoomsNumber: 0,
    generalcharacteristics: '',
   imgLink: ''
  };

  hotels :any;

  getHotelList() {
    this.hs.getInfoList()
      .snapshotChanges()
      .pipe(
        map((data) => {
          
          return data.map((info) => ({
            key: info.key,
            ...(info.payload.val() as {}),
          }));
        })
      )
      .subscribe((data) => {
        
        this.hotels = data;
        console.log(this.hotels)
      });
  }
  constructor(private db: AngularFireDatabase, private hs:HotelServiceService) {}

  addHotel() {
    this.db.list('HotelsList').push(this.hotel);
    this.hotel.hotelName = '';
    this.hotel.address = '';
    this.hotel.city = '';
    this.hotel.starNumber = 0;
    this.hotel.RoomsNumber = 0;
    this.hotel.generalcharacteristics = '';
 
    this.hotel.imgLink= '';
  }
}
