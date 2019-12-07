import { Injectable } from '@angular/core';
import { Msg } from '../models/msg.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError, } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  msg: Msg;

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(msg: Msg) {
    console.log('msg ', msg);
    const url = environment.URL;
    return this.http.post(url, msg)
      .pipe(map((resp: any) => {
        return resp;
      }), catchError(err => {
        return throwError(err);
      }))
  }
}
