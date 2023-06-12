import { Component, OnInit, ViewChild } from '@angular/core';
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
  locationName: string;
  searchTerm: string | null | undefined;
  resultados: any[] = [];
  constructor(private weather: WeatherApiService) { this.searchTerm = ''; this.locationName = ''; }
  ngOnInit() { }

  HandleInput() {
    this.searchTerm = this.searchBar.value;
    this.weather.q = this.searchTerm;
    if (this.searchTerm?.length! >= 3 && this.searchTerm?.length! <= 15) {
      this.weather.autoComplete().subscribe(data => { this.locationName = data.name; this.resultados = data; console.log(data); });
    }
    else {
      this.resultados = [];
    }
  }
  PopulateCard(resultadoCity: string | null | undefined) {
    console.log(resultadoCity);
    resultadoCity = this.weather.q;
    this.weather.getWeather().subscribe(data => {
      this.temperature = data.current.temp_c;
      this.locationName = data.location.name;
    })
  }
}

