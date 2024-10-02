import { Status } from './status.model';

export class Reminder {
  constructor(
    public id_remind: number,
    public description: string,
    public full_description: string,
    public date_creation: Date,
    public date_complite: Date | null,
    public status: Status // Теперь статус строго типизирован
  ) {}
}
