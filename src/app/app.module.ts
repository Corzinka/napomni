import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Добавьте этот импорт
import { MatInputModule } from '@angular/material/input'; // Для текстовых полей
import { MatButtonModule } from '@angular/material/button'; // Для кнопок
import { MatCardModule } from '@angular/material/card'; // Для карточек
import { MatFormFieldModule } from '@angular/material/form-field'; // Для обертки текстовых полей
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatDatepickerModule } from '@angular/material/datepicker';  // Для выбора даты
import { MatNativeDateModule } from '@angular/material/core';  // Для использования формата дат
import { MatSelectModule } from '@angular/material/select';  // Для выпадающего списка

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ReminderListComponent,
    ReminderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
