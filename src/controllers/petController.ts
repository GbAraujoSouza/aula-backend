import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { Request, Response } from 'express';

class petController {
  async createPet(request: Request, response: Response) {
    try {
      const pet = await prisma.pet.create({ data: request.body });
      return response.status(200).json(pet);
    } catch (error) {
      return response.status(500).json({ error: error });
    }
  }
  async readAllPets(request: Request, response: Response) {
    try {
      const pets = await prisma.pet.findMany();
      return response.status(200).json(pets);
    } catch (error) {
      return response.status(500).json({ error: error });
    }
  }
}

export default new petController();
