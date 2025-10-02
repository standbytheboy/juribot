import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header'; // Reutilizamos o header existente
import mascotIcon from '../assets/juribot-mascot.png'; // Ícone para o campo de input

const Chat = () => {
  // Estado para armazenar todas as mensagens da conversa
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Por onde devemos começar?',
      sender: 'bot',
    },
  ]);

  // Estado para controlar o valor do campo de input
  const [inputValue, setInputValue] = useState('');
  // Estado para mostrar um indicador de "digitando..." enquanto a IA processa
  const [isLoading, setIsLoading] = useState(false);

  // Ref para o final da lista de mensagens, para rolar a tela automaticamente
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Efeito para rolar para a última mensagem sempre que a lista for atualizada
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Função para lidar com o envio da mensagem
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Adiciona a mensagem do usuário à tela
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // --- PONTO DE INTEGRAÇÃO DA IA ---
    // 2. Simula uma chamada de API e uma resposta da IA
    // TODO: Substitua este setTimeout pela sua chamada de API real
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        // Resposta de exemplo, aqui você colocaria a resposta vinda da sua IA
        text: 'Entendido. Estou analisando sua dúvida sobre "' + userMessage.text + '". Por favor, aguarde um momento.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 2000); // Simula 2 segundos de espera
    // --- FIM DO PONTO DE INTEGRAÇÃO ---
  };

  return (
    <div className="flex flex-col h-screen bg-[#fdf5ec] font-sans">
      <Header />

      {/* Área de Mensagens */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <img src={mascotIcon} alt="JuriBot" className="w-10 h-10 flex-shrink-0" />
            )}
            <div
              className={`max-w-lg px-5 py-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-[#544b47] text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none shadow'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {/* Indicador de "digitando..." do bot */}
        {isLoading && (
          <div className="flex items-end gap-3 justify-start">
            <img src={mascotIcon} alt="JuriBot" className="w-10 h-10 flex-shrink-0" />
            <div className="px-5 py-3 rounded-2xl bg-white text-gray-500 shadow rounded-bl-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
              </div>
            </div>
          </div>
        )}
        {/* Elemento invisível para o qual a tela irá rolar */}
        <div ref={messagesEndRef} />
      </div>

      {/* Área de Input */}
      <div className="bg-white/70 backdrop-blur-sm p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="container mx-auto flex items-center gap-4">
          <img src={mascotIcon} alt="Seu ícone" className="w-10 h-10 flex-shrink-0" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua dúvida aqui"
            className="w-full px-5 py-3 bg-white border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-[#544b47] shadow transition"
          />
          <button type="submit" className="hidden">Enviar</button> {/* Botão oculto para envio com Enter */}
        </form>
      </div>
    </div>
  );
};

export default Chat;