import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReminderService } from '../reminder.service';
import { Reminder } from '../models/reminder.model';

import { Status } from '../models/status.model';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css'],
})
export class ReminderListComponent implements OnInit {
  reminders: Reminder[] = [];
  displayedColumns: string[] = [
    'status',
    'description',
    'date_creation',
    'date_complite',
  ];

  constructor(
    private reminderService: ReminderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* 
    this.reminderService.getReminders().subscribe((data: Reminder[]) => {
      this.reminders = data;
    });
    */
    this.reminders = this.getTestReminders();
  }

  /*
  onRowDoubleClick(reminderId: number): void {
    this.router.navigate(['/reminders', reminderId]);
  }
  */

  onRowDoubleClick(reminder: Reminder): void {
    this.router.navigate(['/reminder-form'], { state: { reminder } });
  }

  private getTestReminders(): Reminder[] {
    return [
      new Reminder(
        1,
        'Купить',
        'Купить что-то',
        new Date('2023-10-01'),
        null,
        new Status(Status.PLANNED)
      ),
      new Reminder(
        2,
        'Уборка',
        'Уборка комнаты',
        new Date('2023-09-25'),
        new Date('2023-09-30'),
        new Status(Status.COMPLETED)
      ),
      new Reminder(
        3,
        'Позвонить',
        'Позвонить бабушке',
        new Date('2023-10-02'),
        null,
        new Status(Status.NEW)
      ),
      new Reminder(
        4,
        'Забрать ключи',
        'ключи от дома',
        new Date('2023-10-03'),
        null,
        new Status(Status.PLANNED)
      ),
      new Reminder(
        5,
        'Комуналка',
        'Оплатить комунальные услуги',
        new Date('2023-08-15'),
        null,
        new Status(Status.OVERDUE)
      ),
    ];
  }
}
