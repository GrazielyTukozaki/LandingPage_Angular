import { Component, Input } from '@angular/core';
import { TextBanner } from '../models/textBanner.interface';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
@Input() public image = ""
@Input() public text: TextBanner = {
  heading : "Teste",
  cta: "teste"
};

public contactForm():void{

}
}
