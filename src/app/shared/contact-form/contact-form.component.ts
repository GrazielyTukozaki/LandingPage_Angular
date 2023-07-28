import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

}
