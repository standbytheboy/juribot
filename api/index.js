import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import chatRouter from './routes/chat.js'; // Importa nossa rota de chat

// Carrega variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares essenciais
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Permite que o servidor entenda JSON

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do JuriBot está funcionando!');
});

// Usa as rotas de chat para qualquer requisição em /api/chat
app.use('/api/chat', chatRouter);

// Exporta o app para a Vercel (importante!)
export default app;