import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReminderService } from '../reminder.service';
import { Reminder } from '../models/reminder.model';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService, private router: Router) {}

  ngOnInit(): void {
    this.reminderService.getReminders().subscribe((data: Reminder[]) => {
      this.reminders = data;
    });
  }

  onRowDoubleClick(reminderId: number): void {
    this.router.navigate(['/reminders', reminderId]);
  }
}
