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
  reminder: Reminder | null = null;
  statuses: string[] = ['Новый', 'Запланированный', 'Исполнен', 'Просрочен'];

  constructor(
    private route: ActivatedRoute,
    private reminderService: ReminderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reminderService.getReminders().subscribe((reminders: Reminder[]) => {
      this.reminder = reminders.find((r) => r.id_remind === id) || null;
    });
  }

  saveReminder(): void {
    if (this.reminder) {
      this.reminderService.updateReminder(this.reminder).subscribe(() => {
        this.router.navigate(['/reminders']);
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/reminders']);
  }
}
