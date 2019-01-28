import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: '', redirectTo: '/report-type-selection', pathMatch: 'full' },
      {
        path: '',
        component: AppComponent,
        data: { pageTitle: 'Report Type Selection' },
        // canActivate: [RouteGuardService]
      },
      // { path: '', redirectTo: '/report-type-selection', pathMatch: 'full' },
      // {
      //   path: '**',
      //   component: ExternalErrorManagerComponent
      // }
    ], {
        onSameUrlNavigation: 'reload'
      })
  ],
  declarations: [],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
