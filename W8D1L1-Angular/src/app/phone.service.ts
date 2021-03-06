import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Observable can usually be replaced with rxjs Promise
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


//Errors are usually tested for in component, not the service (this file) that requests it

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private myHttp: Http) { }
  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/phones`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/phones/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/phones/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
      
  }
}
