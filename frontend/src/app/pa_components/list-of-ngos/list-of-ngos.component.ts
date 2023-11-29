import { Component } from '@angular/core';
import { Project } from '../../_models/project';
import { ConstructionOfNgo } from '../../_models/construction';
import { ProjectsService } from '../../_services/projects/projects.service';
import { ConstructionService } from '../../_services/construction/construction.service';
import { StorageService } from '../../_services/storage/storage.service';
import { Router } from '@angular/router';
import { DialogService } from '../../_services/dialog/dialog.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetNgoDTO } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-list-of-ngos',
  templateUrl: './list-of-ngos.component.html',
  styleUrls: ['./list-of-ngos.component.css']
})
export class ListOfNgosComponent {
  allProjects?: Project[];
  selectedProject?: string;

  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource: GetNgoDTO[] = [];

  constructor(
    private userService: UserService,
    ) {}

  ngOnInit() {
    this.userService.getAllNgos()
    .subscribe((result) => {      
      this.dataSource = result;      
    });
  }

}
