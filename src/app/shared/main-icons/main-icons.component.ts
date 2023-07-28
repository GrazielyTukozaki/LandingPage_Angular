import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-main-icons',
  standalone: true,
  imports: [IconComponent, NgFor],
  templateUrl: './main-icons.component.html',
  styleUrls: ['./main-icons.component.scss']
})
export class MainIconsComponent {
  public icons = [
    {image:"truck", text: "Maior disponibilidade"},
    {image:"truck", text: "Maior disponibilidade"},
    {image:"truck", text: "Maior disponibilidade"},
    {image:"truck", text: "Maior disponibilidade"},
    {image:"truck", text: "Maior disponibilidade"},
    {image:"truck", text: "Maior disponibilidade"}

  ]

}
