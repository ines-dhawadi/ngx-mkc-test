import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { StrategiesComponent } from './pages/strategies/strategies.component';

import { TalentComponent } from './pages/talent/talent.component';
import { PilotingComponent } from './pages/piloting/piloting.component';
import { QualityComponent } from './pages/quality/quality.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MeetingsComponent,
    StrategiesComponent,
    QualityComponent,
    TalentComponent,
    PilotingComponent,
    QualityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
