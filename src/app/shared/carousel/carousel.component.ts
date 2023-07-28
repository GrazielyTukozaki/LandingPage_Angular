import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { BtnComponent } from '../btn/btn.component';
import { IconComponent } from '../icon/icon.component';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [BtnComponent, CardComponent, IconComponent, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
public cards = this._content.getCarrouselImages();
constructor(private _content: ContentService){}

public prev():void{}
public next():void{}

}
