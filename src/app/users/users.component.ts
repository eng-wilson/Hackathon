import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
    users$: Object;
    
    constructor(private data: DataService, public dialog: MatDialog) { }
  
    
    openDialog() {
      this.dialog.open(UsersComponent, {
        
      });
    }
    
  
  
    ngOnInit() {
    }
  
  }
  