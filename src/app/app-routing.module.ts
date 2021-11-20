import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { PilotingComponent } from './pages/piloting/piloting.component';
import { QualityComponent } from './pages/quality/quality.component';
import { StrategiesComponent } from './pages/strategies/strategies.component';
import { TalentComponent } from './pages/talent/talent.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: HomeComponent
      },
      {
        path: "meetings",
        component: MeetingsComponent
      },
      {
        path: "strategies",
        component: StrategiesComponent
      },
      {
        path: "quality",
        component: QualityComponent
      },
      {
        path: "talent",
        component: TalentComponent
      },
      {
        path: "piloting",
        component: PilotingComponent
      },
    ],
  },
  {
    path: "**",
    redirectTo: ""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
