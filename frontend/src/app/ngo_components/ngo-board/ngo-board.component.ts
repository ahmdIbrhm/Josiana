import { Component } from '@angular/core';
import { ConstructionService } from '../../_services/construction/construction.service';
import { StorageService } from '../../_services/storage/storage.service';
import { ConstructionOfNgo } from '../../_models/construction';
import { Router } from '@angular/router';
import { Project } from '../../_models/project';
import { ProjectsService } from '../../_services/projects/projects.service';
import { DialogService } from '../../_services/dialog/dialog.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ngo-board',
  templateUrl: './ngo-board.component.html',
  styleUrls: ['./ngo-board.component.css']
})
export class NgoBoardComponent {
  allProjects?: Project[];
  selectedProject?: string;

  displayedColumns: string[] = ['project', 'architect', 'contractor', 'civilEngineer', 'numberOfSubcontractors', 'progress', 'edit'];
  dataSource: ConstructionOfNgo[] = [];
  constructor(
    private projectService: ProjectsService,
    private constructionService: ConstructionService, 
    private storageService: StorageService,
    private router: Router,
    private dialogService: DialogService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
    ) {}


    applyForProjectDialogOptions = {
      title: 'Apply for a project',
      message: 'Are you sure you want to apply for this project?',
      cancelText: 'Cancel',
      confirmText: 'Apply',
      formFields : [
        { name: 'architect', label: 'Architect', type: 'text' },
        { name: 'contractor', label: 'Contractor', type: 'text' },
        { name: 'civilEngineer', label: 'Civil Engineer', type: 'text' },
        { name: 'numberOfSubcontractors', label: 'Number Of SubContractors', type: 'number' },
        // Add more form fields as needed based on your input
      ],
      formGroup : this.fb.group({
        architect: '',
        contractor: '',
        civilEngineer: '',
        numberOfSubcontractors: ''
      })
    };

  applyForProject() {
    if (this.selectedProject) {
      this.dialogService.open(this.applyForProjectDialogOptions);
      this.dialogService.confirmed().subscribe(data => {
        if(data){
          data['ngoId'] = this.storageService.getUser().id;
          data['projectId'] = this.selectedProject;
                    
          this.constructionService.createConstruction(data).
          subscribe((succeded) => {
            this.openSnackBar(succeded);
          });
        }
      });
    }
  }




  ngOnInit() {

    this.projectService.getAllFreeProjects()
    .subscribe(
      (result) => {
        this.allProjects = result;
      }
    )

    this.constructionService.getConstructionByNgo(this.storageService.getUser().id!)
    .subscribe((result) => {  
      this.dataSource = result;
    });
  }

  editConstruction(construction: ConstructionOfNgo) {
    this.router.navigate(['/edit-construction/' + construction.id]);
  }


  openSnackBar(accepted: Boolean) {
    let message = (accepted) ? "Your request has been submitted" : "Can't submit request. Already done?"
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }

}
