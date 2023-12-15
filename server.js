const express = require("express");
const helmet = require('helmet');
const professionalRoutes = require('./routes/professionalRoutes');

const port = 3000;
const app = express();

app.use(express.json());
app.use('/api', professionalRoutes);
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      fontSrc: ["'self'", 'http://localhost.com'], // Add the font source URLs you need
    },
  })
);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get("/api/professionals", (req, res) => {
  // Implemente a lógica para recuperar os professionals do banco de dados ou de uma fonte de dados
  const professionals = [
    { id: 1, nome: "professional 1", job: "Therapy" },
    { id: 2, nome: "professional 2", job: "Therapy" },
  ];
  res.json(professionals);
});

// // Rota para agendamento de terapia
// app.post("/api/schedule", (req, res) => {
//   // Implemente a lógica para salvar o agendamento no banco de dados
//   const agendamento = req.body; // assume que o corpo da requisição contém os dados do agendamento
//   // Faça a lógica para salvar no banco de dados ou em outra fonte de dados
//   res.json({ mensagem: "Agendamento realizado com sucesso", agendamento });
// });

// // Rota para fornecer dados JSON em lotes
// app.get("/api/appointments/{id do dotor}", (req, res) => {
//   //   const { startIndex = 0, quantidade = 1 } = req.query;

//   //   const startIndexInt = parseInt(startIndex, 1);
//   //   const quantidadeInt = parseInt(quantidade, 1);

//   //   // Validar parâmetros (startIndex e quantidade)
//   //   if (isNaN(startIndexInt) || isNaN(quantidadeInt)) {
//   //     return res.status(400).json({ erro: "Parâmetros inválidos." });
//   //   }

//   // Obter a parte dos dados com base nos parâmetros
//   //   const dadosParciais = mockedData.slice(
//   //     startIndexInt,
//   //     startIndexInt + quantidadeInt
//   //   );
//   res.json(mockedData);
// });

//   // Rota para listar horários disponíveis de um professional
// app.get('/api/professionals/:id/schedule', async (req, res) => {
//   const professionalId = parseInt(req.params.id, 10);

//   try {
//     const horariosDisponiveis = await prisma.schedule.findMany({
//       where: { professional_id: professionalId },
//     });

//     res.json(horariosDisponiveis);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ mensagem: 'Erro ao obter horários disponíveis do professional' });
//   }
// });

