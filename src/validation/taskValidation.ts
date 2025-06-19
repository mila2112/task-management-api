import { z } from 'zod';
import { TaskStatus } from '../models/task';

const base = {
  title: z.string().min(1),
  description: z.string().min(1),
  due_date: z.string().datetime(),
  status: z.nativeEnum(TaskStatus),
};

export const taskSchema = z.object(base);
export const partialTaskSchema = z.object({ ...base }).partial();

export const validateTask = (data) => taskSchema.parse(data);
export const validatePartialTask = (data) => partialTaskSchema.parse(data);
