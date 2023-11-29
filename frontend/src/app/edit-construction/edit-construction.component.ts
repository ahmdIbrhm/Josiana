import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConstructionService } from '../_services/construction/construction.service';
import { ConstructionOfNgo, EditConstructionDTO } from '../_models/construction';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-construction',
  templateUrl: './edit-construction.component.html',
  styleUrls: ['./edit-construction.component.css']
})
export class EditConstructionComponent implements OnInit{

  currentConstruction?: ConstructionOfNgo;
  editConstructionFormGroup!: FormGroup;


  max = 100;
  min = 0;
  showTicks = true;
  step = 25;
  thumbLabel = true;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private constructionService: ConstructionService,
    private snackBar: MatSnackBar){

  }

  ngOnInit(): void{
    this.getCurrentConstructionDetails();
  }

  getCurrentConstructionDetails () {
    let constructionId = this.route.snapshot.params['constructionId'];
    this.constructionService.getConstructionById(constructionId).subscribe((result) => {
      this.currentConstruction = result
      this.editConstructionFormGroup = this.fb.group({
        architectFormControl: [this.currentConstruction?.architect, Validators.required],
        contractorFormControl: [this.currentConstruction?.contractor, Validators.required],
        civilEngineerFormControl: [this.currentConstruction?.civilEngineer, [Validators.required]],
        subcontractorsFormControl: [this.currentConstruction?.numberOfSubcontractors, Validators.required],
        progressFormControl: [this.currentConstruction?.progress, Validators.required]
      });
    });

    
  }


  onSubmitEdit(): void {
    
    const architect = this.editConstructionFormGroup.value.architectFormControl;
    const contractor = this.editConstructionFormGroup.value.contractorFormControl;
    const civilEngineer = this.editConstructionFormGroup.value.civilEngineerFormControl;
    const numberOfSubcontractors = this.editConstructionFormGroup.value.subcontractorsFormControl;
    const progress = this.editConstructionFormGroup.value.progressFormControl;
    
    let editConstructionDto: EditConstructionDTO = {
      architect: architect,
      contractor: contractor,
      civilEngineer: civilEngineer,
      numberOfSubcontractors: numberOfSubcontractors,
      progress: progress
    }
    
    this.constructionService.editConstruction(this.currentConstruction?.id!, editConstructionDto)
    .subscribe((accepted)=>{
      this.openSnackBar(accepted)
    });
  }

  openSnackBar(accepted: Boolean) {
    let message = (accepted) ? "Your construction has been modified" : "Can't modify construction. Error occured"
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
    });
  }
}
