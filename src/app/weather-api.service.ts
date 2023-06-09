import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum WeatherInfo{
  name = 'name',
  country = 'country',
  temperature = 'temp_c'
}
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  key = "6d66af816f0d44d9942225012230806";
  url = "https://api.weatherapi.com/v1/current.json?key=";
  q: string | null | undefined;
  fullUrl = this.url + this.key ;
  searchUrl = "http://api.weatherapi.com/v1/search.json?key=6d66af816f0d44d9942225012230806";
  constructor(private weatherApi: HttpClient) { }
  getWeather(){
  return this.weatherApi.get<any>(`${this.fullUrl}&q=${this.q}+&aqi=no`);
  }
  autoComplete(){
    return this.weatherApi.get<any>(`${this.searchUrl}+&q=${this.q}`)
  }
}
