import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';


const routes: Routes = [
  { path: '', component: AppStartPageComponent },
  { path: 'rxjs', component: RxjsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
