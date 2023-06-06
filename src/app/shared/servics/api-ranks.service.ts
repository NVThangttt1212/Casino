import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ApiRank} from "../types";


@Injectable({
  providedIn: 'root'
})
export class ApiRanksService{


  constructor(private http: HttpClient) {}


  //handle phần canActivated

  private _checkSignIn: boolean = false;
  get checkSignIn(): boolean {
    return this._checkSignIn;
  }
  set checkSignIn(value: boolean) {
    this._checkSignIn = value;
  }

  private ApiRank = 'http://localhost:3000/posts'

  getId(id: number): Observable<any> {
    return this.http.get(`${this.ApiRank}?id=${id}`);

  }
  getData(){
    return this.http.get(`${this.ApiRank}`);
  }
  updateRank(bookie: ApiRank): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(
      `${this.ApiRank}/${bookie.id}`,
      bookie,
      httpOptions
    );
  }
}
