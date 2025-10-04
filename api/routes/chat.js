import { Router } from 'express';
import OpenAI from 'openai';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

// Instancia o cliente da OpenAI com a chave de API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rota POST para /api/chat
router.post('/', authMiddleware, async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida.' });
  }

  try {
    // Chamada para a API da OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Modelo de linguagem
      messages: [
        {
          role: "system",
          content: "Você é o JuriBot, um assistente jurídico amigável e prestativo. Sua missão é fornecer orientações claras e acessíveis sobre direitos, com base na legislação brasileira. Não forneça conselhos legais formais, mas sim informações educativas."
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    // Envia a resposta da IA de volta para o frontend
    res.status(200).json({ reply: aiResponse });

  } catch (error) {
    console.error('Erro na API da OpenAI:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao comunicar com a IA.' });
  }
});

export default router;