import 'dotenv/config';
import { Router } from 'express';
import { CohereClient } from 'cohere-ai';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

if (!process.env.COHERE_API_KEY) {
  throw new Error("A variável de ambiente COHERE_API_KEY não está definida.");
}

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post('/', authMiddleware, async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida.' });
  }

  try {
    const response = await cohere.chat({
      // Define a personalidade do bot no "preamble"
      preamble: "Você é o JuriBot, um assistente jurídico amigável e prestativo. Sua missão é fornecer orientações claras e acessíveis sobre direitos, com base na legislação brasileira. Não forneça conselhos legais formais, mas sim informações educativas. Responda sempre em português do Brasil.",
      message: message,
      // Outras configurações (opcional)
      // maxTokens: 1000,
    });

    const aiResponse = response.text;

    res.status(200).json({ reply: aiResponse });

  } catch (error) {
    console.error('Erro na API da Cohere:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao comunicar com a IA.' });
  }
});

export default router;