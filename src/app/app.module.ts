import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { WarningComponent } from './warning/warning.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    DetailsComponent,
    DataTableComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }