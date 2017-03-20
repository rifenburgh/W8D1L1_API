import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//Observable can usually be replaced with rxjs Promise
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneServiceService {
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
}
