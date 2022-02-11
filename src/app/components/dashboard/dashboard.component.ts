import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileElement } from 'src/app/models/file-element.model';
import { FileService } from 'src/app/servies/file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public fileElements:  FileElement[] = [];
  public currentRoot: FileElement = new FileElement();
  public currentPath: string = "";
  public canNavigateUp :boolean = false;

  constructor(private fileService : FileService) { }

  ngOnInit(): void {
  }
  addFolder(folder: { name: string }) {
   
    let fileElement = new FileElement();
    fileElement.name = folder.name;
    fileElement.isFolder = true;
    fileElement.parent = this.currentRoot? this.currentRoot.id : 'root';
    this.fileService.add(fileElement);
    this.updateFileElementQuery();
  }
  
  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }
  
  navigateToFolder(element: FileElement){

  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }
  
  renameElement(element: FileElement) {
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }

  navigateUp(){

  }
}
