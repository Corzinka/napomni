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

  // Метод для создания тестовых данных
  private getTestReminders(): Reminder[] {
    return [
      new Reminder(
        1,
        'Buy groceries',
        'Buy milk, eggs, and bread',
        new Date('2023-10-01'),
        null,
        new Status(Status.PLANNED)
      ),
      new Reminder(
        2,
        'Finish project',
        'Complete the final report for the project',
        new Date('2023-09-25'),
        new Date('2023-09-30'),
        new Status(Status.COMPLETED)
      ),
      new Reminder(
        3,
        'Call John',
        'Discuss the new design ideas for the app',
        new Date('2023-10-02'),
        null,
        new Status(Status.NEW)
      ),
      new Reminder(
        4,
        'Schedule meeting with team',
        'Set up a meeting for the project discussion next week',
        new Date('2023-10-03'),
        null,
        new Status(Status.PLANNED)
      ),
      new Reminder(
        5,
        'Submit tax forms',
        'Complete and submit the tax forms for Q3',
        new Date('2023-08-15'),
        null,
        new Status(Status.OVERDUE)
      ),
      new Reminder(
        6,
        'Book flight tickets',
        'Book tickets for the business trip to Berlin',
        new Date('2023-10-01'),
        null,
        new Status(Status.NEW)
      ),
    ];
  }
}
