import { Component, HostListener, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-apply-project-dialog',
  templateUrl: './apply-project-dialog.component.html',
  styleUrls: ['./apply-project-dialog.component.css']
})
export class ApplyProjectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    cancelText: string,
    confirmText: string,
    message: string,
    title: string,
    formGroup: FormGroup,
    formFields: any
}, private mdDialogRef: MatDialogRef<ApplyProjectDialogComponent>) {}


  public cancel() {
    this.close(false);
  }
  public close(value: any) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    if(this.data.formGroup){
      this.close(this.data.formGroup.value);
    }
    else{
      this.close(true);
    }
  }
  @HostListener("keydown.esc") 
    public onEsc() {
      this.close(false);
    }

}
