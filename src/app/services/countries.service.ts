import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Countries } from '../modules/countries'
import { CountryName } from '../modules/countryname';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http:HttpClient) { }
  
  getCountriesList():Observable<Countries []>{
    return this._http.get <Countries []>('https://restcountries.eu/rest/v2/all')
    .pipe(
      catchError(this.handleError)
      )
  }
  handleError(error){
    let errorMessage = {errorMsg:'',errorCode:''};
        errorMessage.errorCode = `Code: ${error.status}`;
        errorMessage.errorMsg = `Error: ${error.message}`;
    window.alert(errorMessage.errorMsg);
    return throwError(errorMessage);
  }
  
  public url:any;
  public getCntryByName(name:string):Observable< CountryName>{
    this.url=("https://restcountries.eu/rest/v2/name/"+name+"?fullText=true");
    // https://restcountries.eu/rest/v2/name/$(name)?fullText=true
    console.log("url:"+this.url);
    
     return this._http.get<CountryName>(this.url);

  }
}
