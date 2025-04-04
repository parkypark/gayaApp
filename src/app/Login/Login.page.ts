import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonCard, IonCardHeader, IonInput, IonText, IonButton,
  IonCardTitle, IonCardSubtitle, IonCardContent,IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput,
    IonItem, IonLabel, IonList, IonText, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonGrid, IonRow, IonCol,
    FormsModule, ReactiveFormsModule 
    ], 
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      phoneNumber: [
        '', 
        [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')] // E.164 format
      ],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const phoneNumber = this.loginForm.value.phoneNumber;
      console.log('Phone Number:', phoneNumber);

      // Trigger backend call or credential system logic
      this.authenticateUser(phoneNumber);
    }
  }

  private authenticateUser(phoneNumber: string) {
    // Logic for sending OTP or integrating with a mobile credential system
    console.log('Authenticating user with phone number:', phoneNumber);
    // Example: Send phone number to an authentication API
  }
}