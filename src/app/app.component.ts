import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';

   
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet] 
})
export class AppComponent {
  constructor() {  
    
   // Hide the splash (you should do this on app launch)
   SplashScreen.hide();

   // Show the splash for an indefinite amount of time:
   SplashScreen.show({
     autoHide: false,
   });

   // Show the splash for two seconds and then automatically hide it:
   SplashScreen.show({
     showDuration: 2000,
     autoHide: true,
   });
  }

 
}
