import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  // ngSubmit
  onSave():void {
    if (this.myForm.invalid) {

      console.log(`Gender: ${this.myForm.controls['gender'].errors}`);
      console.log(`Notifications: ${this.myForm.controls['wantNotifications'].errors}`);
      console.log(`Conditions: ${JSON.stringify(this.myForm.controls['termsAndConditions'].errors)}`);

      this.myForm.markAllAsTouched();

      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;

    console.log(this.myForm.value);
    console.log(this.person);
  }
}
