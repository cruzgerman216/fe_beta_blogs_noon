import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.shared.scss'],
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  });

  errors: string[] = [];

  // injecting services
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signup() {
    const formData = this.signupForm.value;
    this.authService.signup(formData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login']);
      },
      error: (res: any) => {
        console.log(res.error);
        this.errors = res.error;
      },
    });
  }
}
