import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reminder } from './models/reminder.model';
import { Status } from './models/status.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private apiUrl = 'http://localhost:5000/api/reminders';

  constructor(private http: HttpClient) { }

  getReminders(): Observable<Reminder[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map(
          (item) =>
            new Reminder(
              item.id_remind,
              item.description,
              item.full_description,
              new Date(item.date_creation),
              item.date_complite ? new Date(item.date_complite) : null, // проверяем наличие даты
              new Status(item.status)
            )
        )
      )
    );
  }

  updateReminder(reminder: Reminder): Observable<Reminder> {
    const reminderPayload = {
      description: reminder.description,
      full_description: reminder.full_description,
      date_creation: reminder.date_creation.toISOString(),
      date_complite: reminder.date_complite ? reminder.date_complite.toISOString() : null,
      status: reminder.status.name
    };

    return this.http.put<Reminder>(`${this.apiUrl}/${reminder.id_remind}`, reminderPayload);
  }
}
