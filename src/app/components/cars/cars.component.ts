import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCars().subscribe(cars => {
      this.cars = cars;
    })
  }

}
