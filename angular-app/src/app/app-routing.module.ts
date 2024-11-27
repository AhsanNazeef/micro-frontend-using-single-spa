import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { CardAngularComponent } from './components/card-angular/card-angular.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: CardAngularComponent,
  },
  {
    path: 'angular',
    children: [
      {
        path: '',
        component: CardAngularComponent,
      },
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
