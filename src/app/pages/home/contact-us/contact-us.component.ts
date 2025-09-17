import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact-us',
   standalone: true,
  imports: [FormsModule,TranslateModule, ReactiveFormsModule, DropdownModule, CheckboxModule, ButtonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent {
contactForm: FormGroup;

  genderOptions = [
    { name: 'home.contactUs.form.female', value: 'home.contactUs.form.female' },
    { name: 'home.contactUs.form.male', value: 'home.contactUs.form.male' }
  ];


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      age: [''],
      preferredDay: [null],
      preferredTime: [''],
      teacherGender: this.fb.control([])
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    }
  }
}
