import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CaselawComponent } from './Pages/caselaw/caselaw/caselaw.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { OverviewComponent } from './Pages/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    CaselawComponent,
    SidebarComponent,
    DashboardComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }