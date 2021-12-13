import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaselawComponent } from './Pages/caselaw/caselaw/caselaw.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { OverviewComponent } from './Pages/overview/overview.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';

const routes: Routes = [
  { path:'', component:LoginComponent, pathMatch: 'full'  },
  {path:'login', component:LoginComponent},
  { path: 'Admin', component:DashboardComponent,children: [  
    {path:'dashboard',component:DashboardComponent},
    {path:'caselaw',component:CaselawComponent},
    {path:'overview',component:OverviewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
