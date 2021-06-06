import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
interface DataPoint {
  area: any;
  billAmount: number;
  period: number;
  email?: string;
  phone?: string;
  lang?: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataPointService {
  dataPoint: DataPoint | undefined;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  urlProviders = environment.rootURL;

  constructor(private Http: HttpClient) {}

  listDataPoints() {
    return this.Http.get(this.urlProviders + '/list');
  }

  createDataPoint(myform: any) {
    if (myform.phone !== '') {
      this.dataPoint = {
        area: myform.area,
        billAmount:
          parseFloat(myform.bill1) +
          parseFloat(myform.bill2) +
          parseFloat(myform.bill3) +
          parseFloat(myform.bill4),
        period: 1,
        lang: myform.lang,
        phone: `+216${myform.phone}`
      };
    }
    if (myform.email !== '') {
      this.dataPoint = {
        area: myform.area,
        billAmount:
          parseFloat(myform.bill1) +
          parseFloat(myform.bill2) +
          parseFloat(myform.bill3) +
          parseFloat(myform.bill4),
        period: 1,
        email: myform.email,
        lang: myform.lang
      };
    }
    if (myform.phone !== '' && myform.email !== '') {
      this.dataPoint = {
        area: myform.area,
        billAmount:
          parseFloat(myform.bill1) +
          parseFloat(myform.bill2) +
          parseFloat(myform.bill3) +
          parseFloat(myform.bill4),
        period: 1,
        email: myform.email,
        lang: myform.lang,
        phone: `+216${myform.phone}`
      };
    }
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
