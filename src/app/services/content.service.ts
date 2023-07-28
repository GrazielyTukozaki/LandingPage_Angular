import { Injectable } from '@angular/core';
import { CarrouselCard } from '../shared/models/carrouselCard.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public cardImages: CarrouselCard[] = [
    {
      image: "../../../assets/images/Tratores.webp",
      title: "Aluguel de tratores",
    },
    {
      image: "../../../assets/images/Transbordos.webp",
      title: "Aluguel de transbordos",
    },
    {
      image: "../../../assets/images/Plantadeira.webp",
      title: "Aluguel de plantadeira",
    },
    {
      image: "../../../assets/images/Pulverizadores.webp",
      title: "Aluguel de pulverizadores",
    }
  ]
  public getCarrouselImages():CarrouselCard[]{
    return this.cardImages;
  }
}
