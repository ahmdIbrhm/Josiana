import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectsService } from 'src/app/_services/projects/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  constructor(private projectService: ProjectsService, private snackBar: MatSnackBar){}

  projectIdFormControl= new FormControl();

  createProject() {
    const projectId = this.projectIdFormControl.value;
    this.projectService.createProject(projectId).subscribe(
      {
        next: data => {
          this.openSnackBar("Created")
        },
        error: err => {
          this.openSnackBar("Can't create project, it may already exist")
        }
      }
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }

}
