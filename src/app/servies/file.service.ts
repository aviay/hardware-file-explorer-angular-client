import { Injectable } from "@angular/core";
import { FileElement } from "../models/file-element.model";

@Injectable()
export class FileService {
  private map = new Map<string, FileElement>()


  queryInFolder(arg0: string): FileElement[] {
    throw new Error('Method not implemented.');
  }

  update(id: string , update: Partial<FileElement>) {
    let element = this.map.get(id)
    element = Object.assign(element, update)
    this.map.set(element.id, element)
  }
  delete(id: string) {
    this.map.delete(id)
  }

  add(fileElement: FileElement) {
    fileElement.id = "1"
    this.map.set(fileElement.id, this.clone(fileElement))
    return fileElement
  }

  clone(element: FileElement) {
    return JSON.parse(JSON.stringify(element))
  }

  get(id: string) {
    return this.map.get(id)
  }

}