
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  submitted = false;

  submitForm(form: NgForm) {

    if (form.valid) {

      this.submitted = true;

      console.log("Form submitted successfully!");

      console.log(form.value);

    }

  }

}
