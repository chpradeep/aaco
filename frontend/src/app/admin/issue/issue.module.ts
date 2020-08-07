import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues/issues.component';
import {DataService} from './issues/services/data.service';
import {AddComponent} from './issues/dialogs/add/add.component';
import {EditComponent} from './issues/dialogs/edit/edit.component';
import {DeleteComponent} from './issues/dialogs/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    IssuesRoutingModule,
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
    IssuesComponent,
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
export class IssueModule {}
