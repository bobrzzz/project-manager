import { Injectable } from '@angular/core';

import { Project } from '../dataModels/project';

import { mockProjects } from '../../mock-data/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getProjects(): Project[] {
    return mockProjects;
  }
}
