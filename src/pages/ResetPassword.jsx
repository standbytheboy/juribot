const ResetPassword = () => {
  return (
    // Container principal da página
    <div className="flex items-center justify-center min-h-screen bg-[#6c615c] p-4 font-sans">

      {/* Container que agrupa o formulário e as barras laterais */}
      <div className="relative flex items-center w-4xl h-[45rem]">

        {/* Card do formulário de ResetPassword */}
        <div className="w-full h-full flex justify-center flex-col bg-white rounded-l-2xl shadow-lg z-10 p-10 sm:p-14">
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#544b47] text-center leading-tight mb-12 w-2xs mx-auto">
            Redefina a sua senha!
          </h1>

          <form className="space-y-5">

            <div>
              <input
                type="password"
                placeholder="Nova senha"
                className="w-full px-5 py-4 bg-[#f6f6f6] border border-transparent rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8d827d]"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-1/2 px-6 py-4 bg-[#544b47] text-white font-bold text-lg rounded-full hover:bg-[#433b37] transition-colors duration-300 shadow-md cursor-pointer" 
              >
                Recuperar
              </button>
            </div>
          </form>

        </div>
        {/* Barras decorativas à direita */}
        <div className="hidden md:block absolute top-0 bottom-0 right-[-100px] w-[60px] bg-[#544b47] rounded-r-2xl"></div>
        <div className="hidden md:block absolute top-0 bottom-0 right-[-70px] w-[60px] bg-[#8d827d] rounded-r-2xl"></div>
      </div>
    </div>
  );
};

export default ResetPassword;