import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token); // Armazena o token
        navigate('/chat');
      } else {
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      alert('Erro ao fazer login.', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#6c615c] p-4 font-sans">
      <div className="relative flex items-center">

        {/* Barras decorativas à esquerda */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[-100px] w-[60px] bg-[#544b47] rounded-l-2xl"></div>
        <div className="hidden md:block absolute top-0 bottom-0 left-[-70px] w-[60px] bg-[#8d827d] rounded-l-2xl"></div>
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg z-10 p-10 sm:p-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#544b47] text-center leading-tight mb-12">
            Seja bem-vindo de volta!
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
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
              <button type="submit" className="w-1/2 px-6 py-4 bg-[#544b47] text-white font-bold text-lg rounded-full hover:bg-[#433b37] transition-colors duration-300 shadow-md cursor-pointer">
                Entrar
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <Link to={'/password'} className="text-xs text-[#544b47] hover:underline">
              Redefinir senha?
            </Link>
          </div>
          <div className="text-center mt-5">
            <Link to={'/signup'} className="text-xs text-[#544b47] hover:underline">
              Ainda não tem conta? Crie agora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;