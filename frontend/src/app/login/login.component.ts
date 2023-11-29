import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  formSubmitted = false;
  isLoggedIn = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private storageService: StorageService, 
    private router: Router,
    private snackBar: MatSnackBar) {
    this.loginFormGroup = this.fb.group({
      emailFormControl: ['', Validators.required],
      passwordFormControl: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.redirectUser();
    }
  }

  onSubmitLogin(): void {  
    this.formSubmitted = true;  
    if (this.loginFormGroup.valid) {
      const email = this.loginFormGroup.value.emailFormControl;
      const password = this.loginFormGroup.value.passwordFormControl;
      this.authService.login(email!, password!).subscribe({
        next: data => {
          this.storageService.saveUser(data);
          this.redirectUser()
        },
        error: err => {
          this.openSnackBar()
        }
      });
    }
    else {

    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  private redirectUser(): void {
    const user = this.storageService.getUser();
    const role = user.role;
    switch(role) {
      case 'PA': { 
        this.router.navigate(['/pa/board']);
          break; 
      } 
      case 'NGO': { 
        this.router.navigate(['/ngo/board']);
          break; 
      } 
      case 'Citizen': { 
        this.router.navigate(['/citizen/board']);
        break; 
      } 
      case 'ADMIN': { 
        this.router.navigate(['/admin']);
        break; 
      } 
    } 
  }

  openSnackBar() {
    this.snackBar.open("Invalid email or password", 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }
}
