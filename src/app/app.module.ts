import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
