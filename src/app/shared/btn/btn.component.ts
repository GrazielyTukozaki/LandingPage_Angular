import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() public color = 'warning';
  @Input() public type = 'button';
  @Input() public disabled = false;

  @Output() public btnClickEvent = new EventEmitter<any>();

  public btnWithIcon = false;

  public btnClick(): void {
    this.btnClickEvent.emit();
  }
}
