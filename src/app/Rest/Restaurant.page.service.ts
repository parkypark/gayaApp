import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Injectable } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { Restaurant } from "../../stud/Restaurant";
import { Address } from "../../stud/Address";
import { baseUrl, prefix } from "../constants";
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable()
export class RestaurantService {
  constructor(private apiService: ApiService) {}


  getRestaurantsData(): Observable<Restaurant[]> {
    const response: Promise<HttpResponse> =  this.apiService.standardGet(`${baseUrl}${prefix}restaurant`);
    return from(response).pipe(
      map((response) => response.data as Restaurant[]) // Cast response to School[]
    ); 
  }
 
  getRestaurantById(restId: number): Restaurant {
    let selectedRest: Restaurant = {
        id: -1,
        name: '',
        description: '',
        address_id: -1,
        img_id: -1,
    };
    this.getRestaurantsData().subscribe(restaurants => {
        restaurants.forEach((rest) => { 
            if (rest.id == restId) {
              selectedRest = rest;
                
            }
        });
    });
    return selectedRest;
  }
  
  getAddresses(): Observable<Address[]> {
    return of([
        {
            id: 1,
            country: 'Canada',
            province: 'BC',
            city: 'Burnaby',
            address1: '5240 Rumble St',
            address2: '',
            postal: 'V5J2B6',
        }
    ])
  }
  

  getAddressById(addressId: number): Address {
    let selectedAddress: Address = {
        id: -1,
        country: '',
        province: '',
        city: '',
        address1: '',
        address2: '',
        postal: '',
    };
    this.getAddresses().subscribe(addresses =>{
        addresses.forEach((address) => { 
            if (address.id == addressId) {
              selectedAddress = address;
            }
        });
    });
    return selectedAddress;
  }
}

 