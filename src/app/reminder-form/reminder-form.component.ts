import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReminderService } from '../reminder.service';
import { Reminder } from '../models/reminder.model';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.css']
})
export class ReminderFormComponent implements OnInit {
  reminder: Reminder | undefined;

  constructor(
    private route: ActivatedRoute,
    private reminderService: ReminderService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // получаем id из URL
    this.reminderService.getReminders().subscribe((reminders: Reminder[]) => {
      this.reminder = reminders.find((r) => r.id_remind === id); // находим напоминание по id
    });
  }
}
