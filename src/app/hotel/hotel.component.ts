import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
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
    generalcharacteristics: [],
    imgLink: '',
  };
  k = 0;
  hotels: any;
  newHotels: any[] = [];
  cities: string[] = [];
  starNumber: string[] = [];
  RoomsNumber: string[] = [];
  generalcharacteristics: string[] = [];
  hidden: boolean = true;

  getHotelList() {
    this.hs
      .getInfoList()
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
        this.search();
      });
  }

  constructor(
    private db: AngularFireDatabase,
    private hs: HotelServiceService
  ) {}

  addHotel() {
    this.db.list('HotelsList').push(this.hotel);
    this.hotel.hotelName = '';
    this.hotel.address = '';
    this.hotel.city = '';
    this.hotel.starNumber = 0;
    this.hotel.RoomsNumber = 0;
    this.hotel.generalcharacteristics = [];
    this.hotel.imgLink = '';
  }

  search() {
    for (let i = 0; i < this.hotels.length; i++) {
      let str = this.hotels[i].city;
      let str1 = this.hotels[i].starNumber;
      let str2 = this.hotels[i].RoomsNumber;

      let newGen = this.hotels[i].generalcharacteristics.split(',');
      for (let j = 0; j < newGen.length; j++) {
        let str3 = newGen[j];
        
        this.generalcharacteristics.push(str3);
      }

      this.cities.push(str);
      this.starNumber.push(str1);
      this.RoomsNumber.push(str2);
    }

    this.cities = [...new Set(this.cities)];
    this.starNumber = [...new Set(this.starNumber)];
    this.RoomsNumber = [...new Set(this.RoomsNumber)];

    this.generalcharacteristics = [...new Set(this.generalcharacteristics)];

    
  }

  searchHotel(form: any) {
    this.newHotels = [];
    console.log(form.value.starNumber)

 

    this.hidden = false;
    console.log(this.hotels)
    
    for (let i = 0; i < this.hotels.length; i++) {
      if (parseInt(form.value.starNumber) <= parseInt(this.hotels[i].starNumber)) {
        console.log(form.value.city)
        if (this.hotels[i].city === form.value.city||!form.value.city) {
      
          console.log(this.hotels[i].city)
          console.log(form.value.city)
          this.newHotels.push({ ...this.hotels[i] })
          console.log(this.newHotels)
        }
      }
     
    }
  
  }
    
  }