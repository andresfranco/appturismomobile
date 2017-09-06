import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CountryServiceProvider} from '../../providers/country-service/country-service';

@Component({
  selector: 'register',
  templateUrl: 'register.html',
  providers:[CountryServiceProvider]
})
export class RegisterPage {
  userData ={};
  public countries:any;
  constructor(public navCtrl: NavController, public countryservice:CountryServiceProvider) {
    this.loadCountries();
  }
  SignUpForm(){

  }
  loadCountries(){
    this.countryservice.load().then(data=>{
      this.countries=data;
    });
  }

}