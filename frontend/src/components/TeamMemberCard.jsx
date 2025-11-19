const TeamMemberCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transition-transform transform hover:scale-105">
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4">
        {/* Usamos 'object-cover' para garantir que a imagem preencha o círculo sem distorção */}
        <img src={imageUrl} alt={`Foto de ${name}`} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm font-medium text-gray-600 mb-2">{role}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default TeamMemberCard;