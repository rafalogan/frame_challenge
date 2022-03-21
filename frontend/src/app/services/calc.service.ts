import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { ICalc } from "../types";

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  baseUlr = environment.calcApiUrl

  constructor(private httpClient: HttpClient) { }

  getCalc(id: number): Observable<ICalc> {
    return this.httpClient.get<ICalc>(`${this.baseUlr}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
      }
    });
  }
}
