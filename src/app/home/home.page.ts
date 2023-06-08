import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  temperature!: number;
  name!: string;
  constructor(private weather: WeatherApiService) {}
  ngOnInit(){
    this.weather.getWeather().subscribe(data => {
      this.temperature = data.current.temp_c;
      this.name = data.location.name;
  });
}
}
