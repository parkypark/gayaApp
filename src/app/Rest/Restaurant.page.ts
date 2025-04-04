import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader , IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HttpClient } from '@angular/common/http'; 
import { RestaurantService } from './Restaurant.page.service';
import { } from '../constants';
import { Restaurant } from "../../stud/Restaurant";
import { Address } from "../../stud/Address";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-restaurant',
  templateUrl: 'Restaurant.page.html',
  styleUrls: ['Restaurant.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader , IonCardTitle, 
            IonCardSubtitle, IonCardContent,IonThumbnail, ExploreContainerComponent, RouterModule], 
  providers: [RestaurantService]
})

export class RestaurantPage {
  public allRestaurants:Restaurant[] = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient, private restService: RestaurantService) {
    this.getAllRestaurants(); 
  } 

  getAllRestaurants() {
    this.restService.getRestaurantsData().subscribe((val) => {
      this.allRestaurants = val;
    });
  }
  getRestaurantById(restaurantId: number) {
    return this.restService.getRestaurantById(restaurantId);
  }
  getAddressById(addressId: number) {
    return this.restService.getAddressById(addressId); 
  }
}

 