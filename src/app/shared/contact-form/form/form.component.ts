import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { regex } from 'src/app/utils/regex';
import { BtnComponent } from '../../btn/btn.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnComponent, NgFor, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public contactForm: FormGroup = new FormGroup({});
  public interestList = [
    {
      value:"Caminhao",
      checked: false,
    },{
      value:"Linha Agro",
      checked: false,
    },{
      value:"Linha Amarela",
      checked: false,
    },{
      value:"Intralogistica",
      checked: false,
    },{
      value:"Ônibus",
      checked: false,
    },{
      value:"Implementos",
      checked: false,
    },
  ]
  constructor(
    private fb: FormBuilder,
  ) {
    this.contactForm = fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.charPattern),
          ],
        ],
        socialName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.charPattern),
          ],
        ],
        cnpj: [
          '',
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(14),
            Validators.pattern(regex.cpfPattern)
          ],
        ],
        cellphone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(15),
            Validators.pattern(regex.phonePattern)
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(regex.emailPattern)
          ],
        ],
        interests: new FormArray([]),
        message: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.charPattern),
          ],
        ]
    })
  }

  public onCheckboxChange(event: any) {
    const selectedCountries = (this.contactForm.controls['interests'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value));
    } else {
      const index = selectedCountries.controls
      .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }

  public onSubmit(): void {
    console.log(this.contactForm.value)
  }
}
