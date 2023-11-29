import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './_helpers/http.interceptor';
import { PaBoardComponent } from './pa_components/pa-board/pa-board.component';
import { NgoBoardComponent } from './ngo_components/ngo-board/ngo-board.component';
import { CitizenBoardComponent } from './citizen_components/citizen-board/citizen-board.component';
import { RestrictedScreenComponent } from './restricted-screen/restricted-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdmissionComponent } from './admission/admission.component';
import {MatSelectModule} from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MatTableModule } from '@angular/material/table';
import { EditConstructionComponent } from './edit-construction/edit-construction.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { ApplyProjectDialogComponent } from './apply-project-dialog/apply-project-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ListOfNgosComponent } from './pa_components/list-of-ngos/list-of-ngos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    PaBoardComponent,
    NgoBoardComponent,
    CitizenBoardComponent,
    RestrictedScreenComponent,
    HeaderComponent,
    AdmissionComponent,
    FooterComponent,
    LayoutComponent,
    EditConstructionComponent,
    ApplyProjectDialogComponent,
    ListOfNgosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSliderModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
