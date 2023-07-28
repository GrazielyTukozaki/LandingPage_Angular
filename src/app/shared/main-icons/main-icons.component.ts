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
    {image:"crescimento", text: "Economia de até 30%"},
    {image:"board", text: "Documentação inclusa"},
    {image:"truck", text: "Maior disponibilidade"},
    {image:"user", text: "Central de Atendimento Vamos 24 horas"},
    {image:"pin", text: "Acesso à plataforma de controle e gestão de frota"},
    {image:"tractor", text: "Equipamentos sempre atualizados"}

  ]

}
