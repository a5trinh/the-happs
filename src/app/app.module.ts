//Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivityTilesContainerComponent } from './components/activity-tiles-container/activity-tiles-container.component';
import { ActivityTileComponent } from './components/activity-tile/activity-tile.component';
import { ActivityTileDetailsComponent } from './components/activity-tile-details/activity-tile-details.component';

//Service Imports
import { ActivityService } from './shared/activity.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  { path: 'activity/:id', component: ActivityTileDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ActivityTilesContainerComponent,
    ActivityTileComponent,
    ActivityTileDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
