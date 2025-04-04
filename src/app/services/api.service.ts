import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Injectable } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { Restaurant } from "../../stud/Restaurant";
import { Address } from "../../stud/Address";
import { baseUrl, prefix } from "../constants";
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor() {}

  
  standardGet(requestUrl:string, options?:any): Promise<HttpResponse> {
    
    //requestUrl = `${baseUrl}${prefix}restaurant`;
    let restaurants : Restaurant[];
    options = {
      url: requestUrl,
      headers: { 'content-type': 'application/json' },
      params: {}
    };

    //const response: Promise<HttpResponse> =  
    return CapacitorHttp.get(options);
    // return from(response).pipe(
    //   map((response) => response.data as Restaurant[]) // Cast response to School[]
    // ); 
  }
}

// export default function ApiService($http, $location, $q) {

//     const standardGet = (url, params = {}) => {

//     }
// }