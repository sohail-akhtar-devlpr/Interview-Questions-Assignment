import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
  });

  get emailIsInvalid() {
    return (
      this.form.controls['email'].touched &&
      this.form.controls['email'].dirty &&
      this.form.controls['email'].invalid
    );
  }
}