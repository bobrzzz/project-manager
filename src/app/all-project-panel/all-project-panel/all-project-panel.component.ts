import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../api/api.service";

import { Project } from "./../../dataModels/project";

@Component({
  selector: 'app-all-project-panel',
  templateUrl: './all-project-panel.component.html',
  styleUrls: ['./all-project-panel.component.scss']
})
export class AllProjectPanelComponent implements OnInit {
  private projects: Project[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.projects = this.apiService.getProjects();
    console.log(this.projects)
  }

}
