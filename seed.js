// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Crie usuários
    const user1 = await prisma.user.create({
      data: {
        email: 'user1@example.com',
        name: 'User 1',
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: 'user2@example.com',
        name: 'User 2',
      },
    });

    // Crie profissionais
    const professional1 = await prisma.professional.create({
      data: {
        email: 'professional1@example.com',
        name: 'Professional 1',
        job: 'Therapist',
        Location: 'City 1',
        description: 'Experienced therapist specializing in...',
        value: 50,
        time: 60,
      },
    });

    const professional2 = await prisma.professional.create({
      data: {
        email: 'professional2@example.com',
        name: 'Professional 2',
        job: 'Counselor',
        Location: 'City 2',
        description: 'Compassionate counselor with a focus on...',
        value: 60,
        time: 45,
      },
    });

    // Crie avaliações
    const review1 = await prisma.reviews.create({
      data: {
        rating: 5,
        content: 'Great experience with Professional 1.',
        professional_id: professional1.id,
        user_id: user1.id,
      },
    });

    const review2 = await prisma.reviews.create({
      data: {
        rating: 4,
        content: 'I highly recommend Professional 2.',
        professional_id: professional2.id,
        user_id: user2.id,
      },
    });

    // Crie horários
    const schedule1 = await prisma.schedule.create({
      data: {
        date_hour: new Date('2023-01-01T10:00:00'),
        day_week: 'Monday',
        user_name: 'User 1',
        professional_id: professional1.id,
      },
    });

    const schedule2 = await prisma.schedule.create({
      data: {
        date_hour: new Date('2023-01-02T15:30:00'),
        day_week: 'Tuesday',
        user_name: 'User 2',
        professional_id: professional2.id,
      },
    });

    console.log('Dados populados com sucesso');
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
  