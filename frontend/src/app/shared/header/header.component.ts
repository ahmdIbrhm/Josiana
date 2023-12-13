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

  goToSurvey(): void{
    window.open('https://survey123.arcgis.com/share/9ce3118139d242ad80dd5ddf1cb67236?portalUrl=https://U-lille.maps.arcgis.com', '_blank');
  }

  goToBuildings(): void {
    window.open('https://u-lille.maps.arcgis.com/apps/dashboards/3d0a50e6abb44fd5807aa26710a39afb', '_blank');
  }

}
