import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { ApiService } from './app/services/api.service';
import { FoodService } from "./app/Food/Food.page.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
bootstrapApplication(AppComponent, {
 
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    ApiService,
    FoodService,
    FormsModule, ReactiveFormsModule
  ], 
});
