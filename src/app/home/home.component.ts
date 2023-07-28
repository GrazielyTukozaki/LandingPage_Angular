import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../shared/banner/banner.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { ContactFormComponent } from "../shared/contact-form/contact-form.component";
import { TextBanner } from '../shared/models/textBanner.interface';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, BannerComponent, CarouselComponent, ContactFormComponent]
})
export class HomeComponent {
public bannerText: TextBanner = {
    heading : "LOCAÇÃO DE MÁQUINAS PESADAS?",
    cta: "CONTE COM A VAMOS!"
  };
public bannerImg = "../../assets/images/linha_agro.webp"
}
