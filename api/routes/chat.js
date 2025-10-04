// /api/routes/chat.js
import { Router } from 'express';
import { VertexAI } from '@google-cloud/vertexai';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

// Inicializa o cliente da Vertex AI
// Ele irá automaticamente encontrar suas credenciais por causa da variável de ambiente que configuramos
const vertex_ai = new VertexAI({
  project: '102998047359320464717',
  location: 'us-central1',
});

const model = 'gemini-1.5-flash-001'; // Usando um modelo estável e rápido

const generativeModel = vertex_ai.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 8192,
    temperature: 1,
    topP: 0.95,
  },
  systemInstruction: {
    parts: [{ text: "Você é o JuriBot, um assistente jurídico amigável e prestativo. Sua missão é fornecer orientações claras e acessíveis sobre direitos, com base na legislação brasileira. Não forneça conselhos legais formais, mas sim informações educativas." }],
  },
});

router.post('/', authMiddleware, async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida.' });
  }

  try {
    const req_parts = [{ text: message }];
    const result = await generativeModel.generateContent({ contents: [{ role: 'user', parts: req_parts }] });
    const aiResponse = result.response.candidates[0].content.parts[0].text;

    res.status(200).json({ reply: aiResponse });

  } catch (error) {
    console.error('Erro na API da Vertex AI:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao comunicar com a IA.' });
  }
});

export default router;