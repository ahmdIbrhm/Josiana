import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApplyProjectDialogComponent } from 'src/app/apply-project-dialog/apply-project-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: MatDialogRef<ApplyProjectDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public open(options: any) {
    this.dialogRef = this.dialog.open(ApplyProjectDialogComponent, {    
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
        formGroup: options.formGroup,
        formFields: options.formFields,
      },
      width: '40%'

 });
}
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed();
  }
}
