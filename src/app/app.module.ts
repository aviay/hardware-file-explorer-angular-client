import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
//import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { NewFolderDialogComponent } from './components/dialogs/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './components/dialogs/rename-dialog/rename-dialog.component'
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileService } from './servies/file.service';


@NgModule({
  declarations: [
    AppComponent,
    NewFolderDialogComponent,
    RenameDialogComponent,
    FileExplorerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
  //FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [FileService],
  bootstrap: [AppComponent],
  exports: [FileExplorerComponent]
})
export class AppModule { }
