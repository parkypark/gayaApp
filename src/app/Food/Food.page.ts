import { Component, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonCard, IonCardHeader, 
        IonCardTitle, IonCardSubtitle, IonCardContent,IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from "./Food.page.service";
import { Food } from "../../stud/Food";
import * as _ from 'lodash'; 
@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
            IonItem, IonLabel, IonList, 
            IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
            IonGrid, IonRow, IonCol,
            ExploreContainerComponent]
})
export class FoodPage implements OnInit {

  restId = 0;
  public allFoodInRest:Food[] = [];
  constructor(
    private route: ActivatedRoute, 
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
    
    this.activatedRoute.params.subscribe(params => {
      this.restId = params['restId'];
        this.getAllFoodByRestId(this.restId);
      });
  }

  getAllFoodByRestId(restId:number) {
    this.foodService.getAllFoodByRestId(this.restId).subscribe((val) => {

      this.allFoodInRest = val;
      console.log(val);
       
      _.forEach(this.allFoodInRest, function(value:Food){
        //Split ingredients with delimiter ,
        let tmp = value.Ingredients ? value.Ingredients.split(',').map(i => i.trim()) : [];
        value.IngredientsList = tmp; 
      });
      
    });
  }
                                  
  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap) => { 
      const RestaurantId = paramMap.get('rest_id'); 
       
    });

    
  }
}
