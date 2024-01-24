import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { Request, Response } from 'express';

async function createUser(request: Request, response: Response) {
  try {
    const user = await prisma.user.create({ data: request.body });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({ error: error });
  }
}

async function readAllUser(request: Request, response: Response) {
  try {
    const usuarios = await prisma.user.findMany();
    return response.status(200).json(usuarios);
  } catch (error) {
    return response.status(500).json({ error: error });
  }
}

export { createUser, readAllUser };
