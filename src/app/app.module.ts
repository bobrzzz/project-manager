import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectPanelComponent } from './project-panel/project-panel/project-panel.component';
import { AllProjectPanelComponent } from './all-project-panel/all-project-panel/all-project-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPanelComponent,
    AllProjectPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
