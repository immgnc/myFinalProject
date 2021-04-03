import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.scss'],
})
export class SingleHotelComponent implements OnInit {


  constructor(private router: ActivatedRoute) { }
  
  ngOnInit(): void {
   console.log(this.router.snapshot.params)
  }

 
}
