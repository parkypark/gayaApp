import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Injectable } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { Food } from "../../stud/Food";
import { baseUrl, prefix } from "../constants";
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable()
export class FoodService {
  constructor(private apiService:ApiService) {}

  getAllFoodByRestId(foodId:number): Observable<Food[]> {
    
    const response: Promise<HttpResponse> =  this.apiService.standardGet(`${baseUrl}${prefix}food/${foodId}`);
    return from(response).pipe(
      map((response) => response.data as Food[]) // Cast response to School[]
    ); 
  }
 
  // getAddresses(): Observable<Address[]> {
  //   return of([
  //       {
  //           id: 1,
  //           country: 'Canada',
  //           province: 'BC',
  //           city: 'Burnaby',
  //           address1: '5240 Rumble St',
  //           address2: '',
  //           postal: 'V5J2B6',
  //       }
  //   ])
  // }
  

  // getAddressById(addressId: number): Address {
  //   let selectedAddress: Address = {
  //       id: -1,
  //       country: '',
  //       province: '',
  //       city: '',
  //       address1: '',
  //       address2: '',
  //       postal: '',
  //   };
  //   this.getAddresses().subscribe(addresses =>{
  //       addresses.forEach((address) => { 
  //           if (address.id == addressId) {
  //             selectedAddress = address;
  //           }
  //       });
  //   });
  //   return selectedAddress;
  // }
}

 