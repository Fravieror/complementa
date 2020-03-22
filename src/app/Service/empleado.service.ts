import { Injectable } from '@angular/core';
import { Globals } from 'src/app/Globals';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: Http, private globals:Globals) { }

  GetEmployees() {    
    var endPoint = 'empleados';

   // let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();
            
    let options = new RequestOptions({
     // headers: HeadersApp,
      params: ParamsApp
    });

    return this.http
          .get(this.globals.gateway + endPoint, options)
          .pipe(map(response => {
            return response.json();
          }));      
  }
  SaveEmployees(empleado : any){
    var endPoint = 'empleados';

    // let HeadersApp = new Headers({Accept: "*/*"});        
     let ParamsApp: URLSearchParams = new URLSearchParams();
             
     let options = new RequestOptions({
      // headers: HeadersApp,
       params: ParamsApp
     });
 
     return this.http
           .post(this.globals.gateway + endPoint, empleado, options)
           .pipe(map(response => {
             return response.json();
           }));   
  }
}
