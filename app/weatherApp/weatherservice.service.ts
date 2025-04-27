import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http : HttpClient) { }
  api : any = '601cfc1ad2f96b4e086fb66c27e1d8b3';
  getWeather(place:string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${this.api}`);
  }
}
