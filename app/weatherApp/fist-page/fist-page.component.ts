import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';
@Component({
  selector: 'app-fist-page',
  templateUrl: './fist-page.component.html',
  styleUrls: ['./fist-page.component.css']
})
export class FistPageComponent implements OnInit{
constructor(private service : WeatherserviceService){

}
  ngOnInit(): void {
  //  this.search();
  }
place : string = "";
weather : any;
apiPlace : any = "";
max_tem : any = "";
min_tem : any = "";
humidity : any = "";
windSpeed : any = "";
celcus : any = "";
  search(){
    this.service.getWeather(this.place).subscribe(response =>{
      this.weather = response;
      this.apiPlace = response.name;
      this.max_tem = response.main.temp_max;
      this.min_tem = response.main.temp_min;
      this.humidity = response.main.humidity;
      this.windSpeed = response.wind.speed;
      this.celcus = response.main.temp - 273.15;
      console.log('cel',this.celcus);
      
      
      // clear search
      this.place = "";
 
      console.log('weather',this.weather,this.max_tem,this.windSpeed);
      
    })
  }

}
