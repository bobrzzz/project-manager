import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../api/api.service";
import { HttpEventType, HttpResponse } from '@angular/common/http';

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
  

  onDropFile(event: DragEvent) {
    event.preventDefault();
    this.uploadFile(event.dataTransfer.files);
  }

  // At the drag drop area
  // (dragover)="onDragOverFile($event)"
  onDragOverFile(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  // At the file input element
  // (change)="selectFile($event)"
  selectFile(event) {
    this.uploadFile(event.target.files);
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      console.log("No file selected!");
      return

    }
    let file: File = files[0];

    this.apiService.uploadFile("http://localhost:3000/sound", file)
      .subscribe(
        event => {
          if (event.type == HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${percentDone}% loaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely loaded!');
          }
        },
        (err) => {
          console.log("Upload Error:", err);
        }, () => {
          console.log("Upload done");
        }
      )
  }

}
