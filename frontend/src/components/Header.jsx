import React from 'react';
import Logo from '../assets/logotipo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Door } from 'akar-icons';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken'); // Verifica se o usuário está logado

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const navItems = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Como funciona', href: '/#como-funciona' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Depoimentos', href: '/#depoimentos' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    // Container principal do header com fundo e bordas
    <header className="w-full bg-[#fdf5ec] font-sans py-2">
      <div className="max-w-7xl mx-auto rounded-lg">
        <nav className="flex items-center justify-between p-4 sm:p-6">
          
          {/* Logo JuriBot */}
          <div className="flex items-center mr-6 w-40">
            <Link to={'/'} className="flex flex-col items-center text-[#544b47]">
              <img src={Logo} alt="Logo Juribot" />
            </Link>
          </div>

          {/* Menu de Navegação (visível em telas maiores) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-lg font-semibold text-[#544b47]">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                 <Link to={item.href} className="hover:text-[#6b5f5b] transition-colors duration-200">
                  {item.name}
                </Link>
                {/* Separador vertical, exceto no último item */}
                {index < navItems.length - 1 && (
                  <span className="text-[#544b47]">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Botão de menu hambúrguer para mobile */}
          <div className="md:hidden">
            <button className="text-[#544b47] focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>

          {/* Botão de Logout */}
          {token && (
            <div className="hidden md:flex items-center ml-8">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#544b47] text-white font-semibold rounded-lg hover:bg-[#433b37] transition-colors cursor-pointer"
              >
                <Door />
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;