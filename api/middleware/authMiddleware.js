import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Pega o token do header 'Authorization'
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Acesso não autorizado. Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verifica se o token é válido
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId }; // Adiciona o ID do usuário ao objeto da requisição
    next(); // Se tudo estiver OK, prossegue para a próxima função (a lógica do chat)
  } catch (error) {
    res.status(401).json({ error: 'Token inválido.' });
  }
};

export default authMiddleware;