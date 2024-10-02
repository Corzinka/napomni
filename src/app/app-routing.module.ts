import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/reminders', pathMatch: 'full' },
  { path: 'reminders', component: ReminderListComponent },
  { path: 'reminders/:id', component: ReminderFormComponent }, // маршрут для формы напоминания

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
