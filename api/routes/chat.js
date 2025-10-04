import { Router } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

// Valida se a chave de API existe
if (!process.env.GEMINI_API_KEY) {
  throw new Error("A variável de ambiente GEMINI_API_KEY não está definida.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', authMiddleware, async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida.' });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      // A instrução do sistema (personalidade do bot) é passada aqui
      systemInstruction: "Você é o JuriBot, um assistente jurídico amigável e prestativo. Sua missão é fornecer orientações claras e acessíveis sobre direitos, com base na legislação brasileira. Não forneça conselhos legais formais, mas sim informações educativas.",
    });

    const result = await model.generateContent(message);
    const response = result.response;
    const aiResponse = response.text();
    
    res.status(200).json({ reply: aiResponse });

  } catch (error) {
    console.error('Erro na API do Gemini:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao comunicar com a IA.' });
  }
});

export default router;