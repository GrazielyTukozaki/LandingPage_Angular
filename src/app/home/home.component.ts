import { Component, OnDestroy, OnInit } from '@angular/core';
import { BannerComponent } from "../shared/banner/banner.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { ContactFormComponent } from "../shared/contact-form/contact-form.component";
import { BtnComponent } from '../shared/btn/btn.component';
import { MainIconsComponent } from '../shared/main-icons/main-icons.component';
import { BannerData, BannerPayload, BannerPayloadData } from '../shared/models/banner-data';
import { Subscription } from 'rxjs';
import { ContentService } from '../services/content.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [BannerComponent, CarouselComponent, ContactFormComponent, BtnComponent, MainIconsComponent]
})
export class HomeComponent implements OnInit, OnDestroy {
  public banner!: BannerData;
  public subscription!: Subscription;

  constructor(private _content: ContentService){}
  
  public ngOnInit(): void {
    this.subscription = this._content.banner$.subscribe(response => {
      const bannerData:BannerData[] = response.data.map( data => {
        console.log(data);
        return {
          image: `http://localhost:1337${data.attributes.image.data.attributes.url}`,
          heading:data.attributes.heading,
          cta: data.attributes.cta,
        }
      }
      );
      this.banner = bannerData[0];
    })
    this._content.getBannerImage();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
public contactForm():void{

}
}
