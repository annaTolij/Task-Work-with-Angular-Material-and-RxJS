import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatInputModule, MatSortModule } from '@angular/material';
import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    AppTabeComponent,
    AppStartPageComponent,
    RxjsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppTabeComponent],
})
export class AppModule { }
