// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some dummy cakes
  const cake1 = await prisma.cake.upsert({
    where: { email: 'choco@example.com' },
    update: {},
    create: {
      email: 'choco@example.com',
      name: 'Chocolate Cake',
    },
  });

  const cake2 = await prisma.cake.upsert({
    where: { email: 'vanilla@example.com' },
    update: {},
    create: {
      email: 'vanilla@example.com',
      name: 'Vanilla Cake',
    },
  });

  console.log({ cake1, cake2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
