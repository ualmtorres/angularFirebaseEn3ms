import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  car: Observable<any>;
  cars: Observable<any[]>;

  carsCollection: AngularFirestoreCollection<Car>;
  carDoc: AngularFirestoreDocument<Car>;


  constructor(private db: AngularFirestore) { }

  getCars() {
    this.carsCollection = this.db.collection('cars');
    this.cars = this.carsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Car;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.cars;
  }

  getCar(id) {
    this.carDoc = this.db.doc<Car>('cars/'+id);
    this.car = this.carDoc.valueChanges();
    return this.car;
  }
}

interface Car {
  id: string;
  marca?: string;
  modelo?: string;
  fabricacion?: string;
  potencia?: number;
  velocidadMaxima?: number;
}