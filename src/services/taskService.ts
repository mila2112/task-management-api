import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (data) => {
  return prisma.task.create({ data });
};

export const getTasks = async () => {
  return prisma.task.findMany();
};

export const getTaskById = async (id: string) => {
  return prisma.task.findUnique({ where: { id } });
};

export const updateTask = async (id: string, data) => {
  return prisma.task.update({ where: { id }, data });
};

export const deleteTask = async (id: string) => {
  await prisma.task.delete({ where: { id } });
  return true;
};
