import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[FormComponent, ReactiveFormsModule]
  
})
export class AppComponent {
  
}
