import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // generated automatically and excluded following the tutorial
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent} from './person-detail/person-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PersonDetailComponent },
  { path: 'persons', component: PersonsComponent }
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule // not necessary any more
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
