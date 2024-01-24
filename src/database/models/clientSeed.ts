import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';
const prisma = new PrismaClient();

interface User {
  email: string;
  name: string;
}
let data: User[] = [];
for (let i = 0; i < 5; i++) {
  data.push({
    email: faker.internet.email(),
    name: faker.person.fullName(),
  });
}
export async function clientSeed() {
  await prisma.user.createMany({ data });
}
