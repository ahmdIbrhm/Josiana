import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstructionOfNgo } from 'src/app/_models/construction';
import { Project } from 'src/app/_models/project';
import { ConstructionService } from 'src/app/_services/construction/construction.service';

@Component({
  selector: 'app-citizen-board',
  templateUrl: './citizen-board.component.html',
  styleUrls: ['./citizen-board.component.css']
})
export class CitizenBoardComponent {
  allProjects?: Project[];
  selectedProject?: string;

  displayedColumns: string[] = ['ngo', 'project', 'architect', 'contractor', 'civilEngineer', 'numberOfSubcontractors', 'progress'];
  dataSource: ConstructionOfNgo[] = [];

  constructor(
    private constructionService: ConstructionService, 
    ) {}

  ngOnInit() {
    this.constructionService.getConstructionsWithNgos()
    .subscribe((result) => {      
      this.dataSource = result.filter((construction) => construction.decision == 'ACCEPTED');      
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
