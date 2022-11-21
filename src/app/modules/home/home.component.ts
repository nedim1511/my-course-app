import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  title = 'my-course-app';
  headerTitle = 'This is a header';
  isHeaderVisible = true;

  name: string | undefined;
  surname: string | undefined;

  formGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
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

  goToProfileAndLogCabbage(): void {
    console.log('Cabbage');
    this.router.navigate(['/profile']);
  }
}
