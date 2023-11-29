import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AuthService } from 'src/app/_services/auth/auth.service';
import { StorageService } from 'src/app/_services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  constructor(private storageService: StorageService, private authService: AuthService) {

  }

  isLoggedIn () {
    return this.storageService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  isPa() {
    return this.storageService.getUser().role === 'PA'
  }

  isCitizen() {
    return this.storageService.getUser().role === 'Citizen'
  }

  isNgo() {
    return this.storageService.getUser().role === 'NGO'
  }

  hello() {
    return "asasd"
  }

}
