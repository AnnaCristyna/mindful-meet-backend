const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    // Povoar professionals
    const professional1 = await prisma.professional.create({
      data: {
        nome: 'professional 1',
      },
    });
  
    // Povoar horários disponíveis
    const horario1 = await prisma.schedule.create({
      data: {
        professional_id: professional1.id,
        dia_semana: 'Segunda-feira',
        horario: new Date('2023-01-01T14:00:00'),
      },
    });
  
    console.log('Dados populados com sucesso');
  }
  
  // Chamar a função de seed
  seed()
    .catch((error) => {
      throw error;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  