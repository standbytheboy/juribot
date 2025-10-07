// frontend/src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso! Você será redirecionado para o login.');
        navigate('/login');
      } else {
        const data = await response.json();
        alert(`Erro no cadastro: ${data.error || 'Tente novamente.'}`);
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Ocorreu um erro. Verifique o console.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#664731] p-4 font-sans">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="w-full md:w-1/2 p-10 sm:p-12 flex flex-col justify-center items-center text-center bg-[#483121] text-white">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">Já tem uma conta?</h2>
          <p className="mb-8 text-gray-300">Acesse a sua conta agora mesmo</p>
          <Link to="/login" className="w-full max-w-xs px-6 py-3 border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-[#483121] transition-colors duration-300 cursor-pointer">
            Entrar
          </Link>
        </div>
        <div className="w-full md:w-1/2 p-10 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#483121] text-center mb-10">
            Crie sua conta
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nome de usuário"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Senha"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xs px-6 py-3 border-2 text-white bg-[#664731] border-[#664731] rounded-full font-bold text-lg hover:bg-white hover:text-[#483121] transition-colors duration-300 cursor-pointer"
              >
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;