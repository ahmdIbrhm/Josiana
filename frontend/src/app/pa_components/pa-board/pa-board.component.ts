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

@Component({
  selector: 'app-pa-board',
  templateUrl: './pa-board.component.html',
  styleUrls: ['./pa-board.component.css']
})
export class PaBoardComponent {
  allProjects?: Project[];
  selectedProject?: string;

  displayedColumns: string[] = ['ngo', 'project', 'architect', 'contractor', 'civilEngineer', 'numberOfSubcontractors', 'progress', 'decision'];
  dataSource: ConstructionOfNgo[] = [];

  constructor(
    private constructionService: ConstructionService, 
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.constructionService.getConstructionsWithNgos()
    .subscribe((result) => {      
      this.dataSource = result;      
    });
  }
  
  acceptConstruction(constructionId: number , accepted: boolean) {
    this.constructionService.acceptConstruction(constructionId, accepted)
    .subscribe((accepted) => {
      this.reloadPage();
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  openSnackBar(accepted: Boolean) {
    let message = (accepted) ? "Done!" : "Failed! Try again later"
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }

}
