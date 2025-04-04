import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Restaurant } from "../../stud/Restaurant";
import { Address } from "../../stud/Address";
import { RestaurantService } from "../Rest/Restaurant.page.service";

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {} 
}

 