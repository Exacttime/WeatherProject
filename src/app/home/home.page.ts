import { Component, OnInit,ViewChild } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { IonSearchbar } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild('mySearchBar') searchBar!: IonSearchbar;
  temperature!: number;
  name: string;
  searchTerm: string | null | undefined;
  constructor(private weather: WeatherApiService) {this.searchTerm = '';this.name = '';}
  ngOnInit(){
    //this.weather.getWeather().subscribe(data => {
     // this.temperature = data.current.temp_c;
      //this.name = data.location.name;
  //});
}
  HandleInput(){
  this.searchTerm = this.searchBar.value;
  this.weather.q = this.searchTerm;
  if(this.searchTerm?.length! >= 3){
    this.weather.autoComplete().subscribe(data => {this.name = data.name});
  }
  }
}
