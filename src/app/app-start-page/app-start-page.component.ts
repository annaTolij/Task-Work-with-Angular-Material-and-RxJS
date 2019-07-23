import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppTabeComponent } from '../app-tabe/app-tabe.component';

@Component({
  selector: 'app-app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.scss']
})
export class AppStartPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit() { }

  openDialog() {
    const dialogRef = this.dialog.open(AppTabeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
