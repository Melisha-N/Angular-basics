import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public myCountries=[];
  constructor(private _countries:CountriesService) { }

  ngOnInit(): void {
    this._countries.getCountriesList().subscribe(data =>{
      this.myCountries = data;
      // console.log(this.myCountries);
      
  })
  }

  public country:string="";
  public selectCountry(event:any){
    this.country = event.target.value;
    console.log("selectedCountry:"+this.country);
  }

    public cntryName:any=[];  
    getByCountryName(name:string){
      this._countries.getCntryByName(name).subscribe(data =>{
        this.cntryName = data;
        console.log("getByCountry Name:"+this.country);

      })
  
    }
  }

  
  // public displayCountries(){
  //   this._countries.getCountriesList().subscribe(data =>{
  //     this.myCountries = data;
  //   })
  // }

  


