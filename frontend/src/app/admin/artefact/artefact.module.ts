import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ArtefactsRoutingModule } from './artefact-routing.module';
import { ArtefactsComponent } from './artefacts/artefact.component';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import {DataService} from './artefacts/services/data.service';
import {AddComponent} from './artefacts/dialogs/add/add.component';
import {EditComponent} from './artefacts/dialogs/edit/edit.component';
import {DeleteComponent} from './artefacts/dialogs/delete/delete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ArtefactsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    
    /*BrowserAnimationsModule,*/
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArtefactsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  providers: [DataService]
})
export class ArtefactModule {}
