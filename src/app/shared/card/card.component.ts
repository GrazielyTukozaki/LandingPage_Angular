import { Component, Directive, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselCard } from '../models/carrouselCard.interface';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() public card: CarrouselCard = {
    image: "../../../assets/images/Tratores.webp",
    title: "teste",
  };

  public contactForm():void{

  }
}
