import { Component, OnInit } from '@angular/core';
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
    private rout: Router
  ) {}

  counter(arrayLength:any) {
    return new Array(arrayLength);
  }

  singleHotel : any;

  hotelId = '';
  ngOnInit(): void {

    this.hotelId = this.router.snapshot.params.id;

    let hotel = this.hs.getHotel(this.hotelId);

    console.log(hotel)

    hotel.valueChanges().subscribe((data) => {
      console.log(data)
      this.singleHotel = data;
      console.log(this.singleHotel)
    });
 
  }

  removeItem() {
    this.hs.removeHotel(this.hotelId);

    this.rout.navigate(['/hotels']);
  }
}
