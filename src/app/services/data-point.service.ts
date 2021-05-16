import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataPointService {
  dataPoint: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  urlProviders = environment.rootURL;

  constructor(private Http: HttpClient) {}

  listDataPoints() {
    return this.Http.get(this.urlProviders + '/list');
  }

  createDataPoint(myform: any) {
    this.dataPoint = {
      area: myform.area,
      billAmount:
        parseFloat(myform.bill1) +
        parseFloat(myform.bill2) +
        parseFloat(myform.bill3) +
        parseFloat(myform.bill4),
      period: 1,
      email: myform.email,
      phone: `+216${myform.phone}`
    };
    return this.Http.post(
      this.urlProviders +
        `/dataPoints/${myform.countryId}/${myform.stateId}/${myform.cityId}`,
      this.dataPoint
    );
  }
  updateDataPoint(reqObj: any) {
    return this.Http.put(this.urlProviders + '/' + reqObj['id'], reqObj);
  }
  deleteDataPoint(id: string) {
    return this.Http.delete(this.urlProviders + '/' + id);
  }
  getDataPoint(id: string) {
    return this.Http.get(this.urlProviders + '/' + id);
  }
}
