import { Component, Input } from '@angular/core';
import { BannerData } from '../models/banner-data';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() public data: BannerData = {
    image : "Teste",
    heading : "Teste",
    cta: "teste"
  };
  
  public contactForm():void{

  }
}
