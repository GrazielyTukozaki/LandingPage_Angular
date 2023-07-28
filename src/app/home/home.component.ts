import { Component } from '@angular/core';
import { BannerComponent } from "../shared/banner/banner.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { ContactFormComponent } from "../shared/contact-form/contact-form.component";
import { TextBanner } from '../shared/models/textBanner.interface';
import { BtnComponent } from '../shared/btn/btn.component';
import { MainIconsComponent } from '../shared/main-icons/main-icons.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [BannerComponent, CarouselComponent, ContactFormComponent, BtnComponent, MainIconsComponent]
})
export class HomeComponent {
public bannerText: TextBanner = {
    heading : "LOCAÇÃO DE MÁQUINAS PESADAS?",
    cta: "CONTE COM A VAMOS!"
  };
public bannerImg = "../../assets/images/linha_agro.webp"
public contactForm():void{

}
}
