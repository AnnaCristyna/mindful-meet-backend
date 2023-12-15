const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProfessionalsData = async () => {
  return prisma.professional.findMany();
};

module.exports = {
  getProfessionalsData,
};
