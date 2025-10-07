import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Verifica se o usuário ou email já existem
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ error: 'Nome de usuário ou e-mail já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    // Log do erro no servidor para depuração
    console.error("Erro no cadastro:", error); 
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
});

// Etapa 1: Solicitar redefinição de senha
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'Usuário com este e-mail não encontrado.' });
    }

    // Cria um token de redefinição de senha que expira em 10 minutos
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '10m' });

    // Para nosso TCC, vamos apenas retornar o token para simular o processo.
    res.status(200).json({ message: 'Link de redefinição gerado.', resetToken });
});

// Etapa 2: Redefinir a senha com o token
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
        return res.status(400).json({ error: 'Token e nova senha são obrigatórios.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        await User.updateOne({ _id: decoded.userId }, { $set: { password: hashedPassword } });

        res.status(200).json({ message: 'Senha redefinida com sucesso!' });

    } catch (error) {
        res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
});

export default router;