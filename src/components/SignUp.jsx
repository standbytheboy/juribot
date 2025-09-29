import React from 'react';

const SignUp = () => {
  return (
    // Container principal da página
    <div className="flex items-center justify-center min-h-screen bg-[#6b5f5b] p-4 font-sans">
      
      {/* Container principal do card */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Painel Esquerdo (Call to action para login) */}
        <div className="w-full md:w-1/2 p-10 sm:p-12 flex flex-col justify-center items-center text-center bg-[#544b47] text-white">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight w-2xs">Já tem uma conta?</h2>
          <p className="mb-8 text-gray-300">Acesse a sua conta agora mesmo</p>
          <button 
            className="w-full max-w-xs px-6 py-3 border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-[#544b47] transition-colors duration-300 cursor-pointer"
          >
            Entrar
          </button>
        </div>
        
        {/* Painel Direito (Formulário de Criação de Conta) */}
        <div className="w-full md:w-1/2 p-10 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#544b47] text-center mb-10">
            Crie sua conta
          </h1>
          
          <form className="space-y-5">
            {/* Input de Nome de Usuário */}
            <div>
              <input
                type="text"
                placeholder="Nome de usuário"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>

            {/* Input de Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>
            
            {/* Input de Senha */}
            <div>
              <input
                type="password"
                placeholder="Senha"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>
            
            {/* Botão de Criar */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xs px-6 py-3 border-2 text-white bg-[#6b5f5b] border-[#6b5f5b] rounded-full font-bold text-lg hover:bg-white hover:text-[#544b47] transition-colors duration-300 cursor-pointer"
              >
                Criar
              </button>
            </div>
          </form>

          {/* Divisor "ou" */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm font-bold text-gray-500">ou</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Botão Secundário */}
          <div className="flex justify-center">
          <button
            className="w-full max-w-xs px-6 py-3 border-2 text-white bg-[#6b5f5b] border-[#6b5f5b] rounded-full font-bold text-lg hover:bg-white hover:text-[#544b47] transition-colors duration-300 cursor-pointer"
          >
            Continuar sem login
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;