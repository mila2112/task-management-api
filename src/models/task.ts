export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
}

export interface Task {
  id?: string;
  title: string;
  description: string;
  due_date: string;
  status: TaskStatus;
}
