import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatRouter from './routes/chat.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado com sucesso.'))
  .catch((err) => console.error('Falha na conexão com MongoDB:', err));

// Rotas
app.use('/api/auth', authRouter); // Adiciona as rotas do auth
app.use('/api/chat', chatRouter);

export default app;