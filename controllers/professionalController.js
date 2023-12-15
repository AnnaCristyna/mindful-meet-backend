const professionalService = require('../services/professionalService');

const getProfessionals = async (req, res) => {
  try {
    const professionals = await professionalService.getProfessionalsData();
    res.json(professionals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao obter professionals' });
  }
};

module.exports = {
  getProfessionals,
};
