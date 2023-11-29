import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PaBoardComponent } from './pa_components/pa-board/pa-board.component';
import { NgoBoardComponent } from './ngo_components/ngo-board/ngo-board.component';
import { CitizenBoardComponent } from './citizen_components/citizen-board/citizen-board.component';
import { AuthGuard } from './_guard/auth_guard';
import { RoleGuard } from './_guard/role_guard';
import { RestrictedScreenComponent } from './restricted-screen/restricted-screen.component';
import { AdmissionComponent } from './admission/admission.component';
import { EditConstructionComponent } from './edit-construction/edit-construction.component';
import { ListOfNgosComponent } from './pa_components/list-of-ngos/list-of-ngos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'pa/board', component: PaBoardComponent, canActivate: [AuthGuard, RoleGuard]},
  { path: 'ngo/board', component: NgoBoardComponent, canActivate: [AuthGuard, RoleGuard]},
  { path: 'citizen/board', component: CitizenBoardComponent, canActivate: [AuthGuard, RoleGuard]},
  { path: 'restricted-screen', component: RestrictedScreenComponent},
  { path: 'admission', component: AdmissionComponent},
  { path: 'edit-construction/:constructionId', component: EditConstructionComponent},
  { path: 'pa/list-of-ngos', component: ListOfNgosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
