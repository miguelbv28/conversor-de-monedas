import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption
  ],
})
export class HomePage {
  amount: number | null = null;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;
  conversionMessage: string = '';

  constructor() {}

  convertCurrency() {
    if (this.amount !== null) {
      const conversionRate = this.getConversionRate(this.fromCurrency, this.toCurrency);
      this.convertedAmount = this.amount * conversionRate;
      this.conversionMessage = `Convertido de ${this.amount} ${this.fromCurrency} a ${this.convertedAmount?.toFixed(2)} ${this.toCurrency}`;
    } else {
      this.convertedAmount = null;
      this.conversionMessage = '';
    }
  }

  getConversionRate(from: string, to: string): number {
    
    if (from === 'USD' && to === 'EUR') {
      return 0.85;
    } else if (from === 'EUR' && to === 'USD') {
      return 1.18;
    } else if (from === 'USD' && to === 'JPY') {
      return 110.53;
    } else if (from === 'JPY' && to === 'USD') {
      return 0.0091;
    } else if (from === 'USD' && to === 'GBP') {
      return 0.75;
    } else if (from === 'GBP' && to === 'USD') {
      return 1.33;
    } else if (from === 'EUR' && to === 'JPY') {
      return 130.67;
    } else if (from === 'JPY' && to === 'EUR') {
      return 0.0076;
    } else if (from === 'EUR' && to === 'GBP') {
      return 0.88;
    } else if (from === 'GBP' && to === 'EUR') {
      return 1.14;
    } else if (from === 'USD' && to === 'MXN') {
      return 18.05; 
    } else if (from === 'MXN' && to === 'USD') {
      return 0.055; 
    } else if (from === 'EUR' && to === 'MXN') {
      return 19.10; 
    } else if (from === 'MXN' && to === 'EUR') {
      return 0.052;
    } else if (from === 'JPY' && to === 'MXN') {
      return 0.12; 
    } else if (from === 'MXN' && to === 'JPY') {
      return 8.45;
    } else if (from === 'GBP' && to === 'MXN') {
      return 22.85; 
    } else if (from === 'MXN' && to === 'GBP') {
      return 0.044; 
    }
    
    
    return 1;
  }
}
