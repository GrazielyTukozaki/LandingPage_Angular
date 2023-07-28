import { Injectable } from '@angular/core';
import { CarrouselCardPayload } from '../shared/models/carrouselCard.interface';
import { environment } from 'src/environments/environment';
import { Observable, Subject, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BannerPayload } from '../shared/models/banner-data';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private API = `${environment.apiHost}`;
  private _carrouselListSubject = new Subject<CarrouselCardPayload>();
  private _bannerSubject = new Subject<BannerPayload>();
  public readonly cardData$: Observable<CarrouselCardPayload> =
    this._carrouselListSubject.asObservable();
  public readonly banner$: Observable<BannerPayload> =
  this._bannerSubject.asObservable();
  
    constructor(private _http: HttpClient) {}

  public getCarrouselImages():void {
    this._http
      .get<CarrouselCardPayload>(`${this.API}carrousel-cards?populate=*`)
      .pipe(take(1))
      .subscribe(response => {
        this._carrouselListSubject.next(response)
      })
  }

  public getBannerImage():void {
    this._http
      .get<BannerPayload>(`${this.API}text-banners?populate=*`)
      .pipe(take(1))
      .subscribe(response => {
        this._bannerSubject.next(response)
      })
  }
}
