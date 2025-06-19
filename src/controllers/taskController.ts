import { Request, Response, NextFunction } from 'express';
import * as taskService from '../services/taskService';
import { validateTask, validatePartialTask } from '../validation/taskValidation';

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateTask(req.body);
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validatePartialTask(req.body);
    const updated = await taskService.updateTask(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await taskService.deleteTask(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
