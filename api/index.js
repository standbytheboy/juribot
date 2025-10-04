// /api/index.js
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente primeiro

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import chatRouter from './routes/chat.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado com sucesso.'))
  .catch((err) => console.error('❌ Falha na conexão com MongoDB:', err));

// Definição das Rotas
app.use('/api/auth', authRouter);
app.use('/api/chat', chatRouter);

// Inicia o servidor para desenvolvimento local
// (A Vercel usa o export default abaixo e ignora esta parte)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
}

// Exporta o app para ser usado pela Vercel
export default app;