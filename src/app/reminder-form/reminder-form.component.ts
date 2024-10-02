import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReminderService } from '../reminder.service';
import { Reminder } from '../models/reminder.model';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.css']
})
export class ReminderFormComponent implements OnInit {
  reminder: Reminder | null = null; // Инициализация reminder как null

  constructor(
    private route: ActivatedRoute,
    private reminderService: ReminderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // получаем id из URL
    this.reminderService.getReminders().subscribe((reminders: Reminder[]) => {
      this.reminder = reminders.find((r) => r.id_remind === id) || null; // Используем null в случае отсутствия
    });
  }

  goBack(): void {
    this.router.navigate(['/reminders']);
  }
}
