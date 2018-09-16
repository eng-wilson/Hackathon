import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { WarningComponent } from './warning/warning.component';
import { AlertTableComponent} from './alert-table/alert-table.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'warning',
    component: AlertTableComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }