import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() public iconName = '';
  @Input() public iconSize = '1';
  @Input() public iconColor = '';

  public iconPath = '';
  public iconSizeClass = 'size-1';
  public iconColorClass = 'color-black';

  public ngOnInit(): void {
    this.iconPath = '../../assets/icons/sprite.svg#' + this.iconName;

    if (this.iconSize) {
      this.iconSizeClass = 'size-' + this.iconSize;
    }

    if (this.iconColor) {
      this.iconColorClass = 'color-' + this.iconColor;
    }
  }
}
