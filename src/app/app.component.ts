import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-course-app';
  headerTitle = 'This is a header';
  isHeaderVisible = true;

  name: string | undefined;
  surname: string | undefined;

  formGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [undefined, [Validators.required, Validators.minLength(3)]],
      surname: undefined,
    });
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.valid);
    console.log(this.formGroup?.value);
  }
}
