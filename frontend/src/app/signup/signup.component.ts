import { Component, OnInit} from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupFormGroup: FormGroup;
  formSubmitted = false;
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.signupFormGroup = this.fb.group({
      nameFormControl: ['', Validators.required],
      emailFormControl: ['', Validators.required],
      passwordFormControl: ['', [Validators.required]],
      roleFormControl: ['', Validators.required],
      phoneFormControl: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmitSignup(): void {
    this.formSubmitted = true;  
    const name = this.signupFormGroup.value.nameFormControl;
    const email = this.signupFormGroup.value.emailFormControl;
    const password = this.signupFormGroup.value.passwordFormControl;
    const role = this.signupFormGroup.value.roleFormControl;
    const phone = this.signupFormGroup.value.phoneFormControl;

    this.authService.register(name, email, password, role, phone).subscribe({
      next: data => {
        this.router.navigate(['/login']);
      },
    });
  }
}
