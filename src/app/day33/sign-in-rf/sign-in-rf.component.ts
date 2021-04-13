import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.scss'],
})
export class SignInRfComponent implements OnInit {
  // signInForm = new FormGroup({
  //   userName: new FormControl(''), // <== default value
  //   password: new FormControl(''), // <== default value
  //   rememberMe: new FormControl(false), // <== default value
  // });

  signInForm!: FormGroup;

  // static min(min: number): ValidatorFn;
  // static max(max: number): ValidatorFn;
  // static required(control: AbstractControl): ValidationErrors | null;
  // static requiredTrue(control: AbstractControl): ValidationErrors | null;
  // static email(control: AbstractControl): ValidationErrors | null;
  // static minLength(minLength: number): ValidatorFn;
  // static maxLength(maxLength: number): ValidatorFn;
  // static pattern(pattern: string | RegExp): ValidatorFn;
  // static nullValidator(control: AbstractControl): ValidationErrors | null;
  // static compose(validators: ValidatorFn[]): ValidatorFn | null;
  // static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
        ]),
      ],
      rememberMe: false,
    });
  }
  onSubmit(): void {
    console.log(this.signInForm);
  }
}
