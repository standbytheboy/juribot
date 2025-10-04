import { Router } from 'express';
import { VertexAI } from '@google-cloud/vertexai';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

const PROJECT_ID = 'id1juribot@primeiro-projeto-474115.iam.gserviceaccount.com';
const LOCATION = 'us-central1'; 

// Inicializa o cliente da Vertex AI
const vertex_ai = new VertexAI({ project: PROJECT_ID, location: LOCATION });

// Define o modelo que vamos usar
const generativeModel = vertex_ai.getGenerativeModel({
    model: 'gemini-1.5-flash-001',
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
        const request = {
            contents: [{ role: 'user', parts: [{ text: message }] }],
        };
        
        const result = await generativeModel.generateContent(request);
        
        // Acessa a resposta de forma segura
        const aiResponse = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Não consegui gerar uma resposta no momento.";
        
        res.status(200).json({ reply: aiResponse });

    } catch (error) {
        console.error('Erro na API da Vertex AI:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao comunicar com a IA.' });
    }
});

export default router;