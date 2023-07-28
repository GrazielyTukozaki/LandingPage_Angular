import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { BtnComponent } from '../btn/btn.component';
import { IconComponent } from '../icon/icon.component';
import { ContentService } from 'src/app/services/content.service';
import { CarrouselCard } from '../models/carrouselCard.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [BtnComponent, CardComponent, IconComponent, NgFor, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
public cards!:CarrouselCard[];
public subscription!: Subscription;
constructor(private _content: ContentService){}

public ngOnInit(): void {
  this.subscription = this._content.cardData$.subscribe(response => {
    const carouselList:CarrouselCard[] = response.data.map( data => {
      console.log(data);
      return {
        image: `http://localhost:1337${data.attributes.image.data.attributes.url}`,
        title: data.attributes.title,
      }
    }
    );
    this.cards = carouselList;
  })
  this._content.getCarrouselImages();
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

public prev():void{}
public next():void{}

}
