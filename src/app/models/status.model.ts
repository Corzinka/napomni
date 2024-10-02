export class Status {
  static readonly NEW = 'Новый';
  static readonly COMPLETED = 'Исполнен';
  static readonly PLANNED = 'Запланирован';
  static readonly OVERDUE = 'Просрочен';

  constructor(public name: string) {}
}
