import { Component } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';
import { Router } from '@angular/router';
import {MatListModule} from '@angular/material/list'
import { LayoutComponent } from '../shared/layout/layout.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeSentences: String[] = [
  'This is a participatory platform that engages the citizens in a smart reconstruction of Beirut Buildings after the 4th of August disaster.',
  'It aims at improving the coordination among the different stakeholders involved in recovery projects in the city.',
  'The platform adopts a participatory human-centered approach for the post-disaster recovery.',
  'It was first designed to assist decision-makers, as well as other stakeholders in the reconstruction process following the explosion of Beirut, but it could also be used in possible future risks.',
  'The platform endorses the data transparency and sharing, and encourages the affected community to get involved in the process.',
  'The recovery projects target and prioritize the most vulnerable groups, in a way to apply the principle of "Leave-No-One-Behind".'
]

communities: { image: string; title: string; text: string; }[] = [
  {
    image: 'assets/images/citizen_preview.jpg',
    title: 'Citizens Space',
    text: 'This area is reserved for citizens who want to participate in the damage assessment and get informed about the recovery process of the city'
  },
  {
    image: 'assets/images/ngo_preview.jpg',
    title: 'NGOs Space',
    text: 'This area is reserved for NGOs who want to participate in the damage assessment, access the buildings data, get permits for projects, and monitor their progress with the authorities'
  },
  {
    image: 'assets/images/pa_preview.png',
    title: 'Public Authority Space',
    text: 'This area is reserved for the public authority at the local scale which represents the decision-making body for reconstruction projects. They give permits for '
  },
]
imgRawsha: string = "assets/images/beirut_main_page.jpg"
imgReconstruction: string = "assets/images/reconstruction.jpeg"

  constructor() { }

  ngOnInit(): void {
  }
}
