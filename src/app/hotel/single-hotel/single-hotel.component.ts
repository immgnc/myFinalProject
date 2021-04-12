import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelServiceService } from '../../Service/hotel-service.service';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.scss'],
})
  
export class SingleHotelComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private hs: HotelServiceService,
    private rout: Router,
   
  ) {}


  counter(arrayLength:any) {
    return new Array(arrayLength);
  }

  
  

  singleHotel: any;
  
  imgs: any = [];
  
  filePath: any;
  hotelId = '';
  ngOnInit(): void {

    this.hotelId = this.router.snapshot.params.id;

    let hotel = this.hs.getHotel(this.hotelId);

    

    hotel.valueChanges().subscribe((data) => {
      
      this.singleHotel = data;
      
    
      this.imgs = this.singleHotel.imgRooms

      this.imgs = this.imgs.split(',')

     

      console.log(this.imgs)
      
    });
 
  }

  removeItem() {
    this.hs.removeHotel(this.hotelId);

    this.rout.navigate(['/hotels']);
  }

  booking() {
    console.log()
  }

   
}



 