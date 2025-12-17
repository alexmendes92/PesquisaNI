import React, { useState } from 'react';
import { Person } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface SidebarFormProps {
  onAddPerson: (person: Person) => void;
}

const SidebarForm: React.FC<SidebarFormProps> = ({ onAddPerson }) => {
  const initialFormState = {
    folha: '',
    nome: '',
    dataNascimento: '',
    rg: '',
    cpf: '',
    mae: '',
    pai: '',
    nacionalidade: 'Brasileiro'
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFormData(initialFormState);
  };

  const handleAdd = () => {
    if (!formData.nome) {
        alert("O nome é obrigatório.");
        return;
    }

    const newPerson: Person = {
      id: crypto.randomUUID(),
      ...formData
    };

    onAddPerson(newPerson);
    handleClear();
  };

  const inputClass = "w-full bg-gray-100 border-none rounded p-2 text-sm focus:ring-2 focus:ring-[#0f2942] outline-none placeholder-gray-500 mb-3";

  return (
    <div className="w-full md:w-80 bg-white shadow-lg flex flex-col h-full border-r border-gray-200 shrink-0">
      {/* Header */}
      <div className="bg-[#e6d5a7] py-4 text-center">
        <h2 className="text-[#0f2942] font-bold text-lg uppercase tracking-wide">Pesquisa de NI</h2>
      </div>

      {/* Form Fields */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="space-y-1">
          <input
            type="text"
            name="folha"
            placeholder="Folha"
            value={formData.folha}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="nome"
            placeholder="Nome da Parte"
            value={formData.nome}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="date" // Using date type for better UX, formatted later
            name="dataNascimento"
            placeholder="Data de Nascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            className={`${inputClass} text-gray-600`}
          />
          <input
            type="text"
            name="rg"
            placeholder="RG"
            value={formData.rg}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="mae"
            placeholder="Mãe"
            value={formData.mae}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="pai"
            placeholder="Pai"
            value={formData.pai}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="nacionalidade"
            placeholder="Nacionalidade"
            value={formData.nacionalidade}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 border-t border-gray-200 flex gap-2">
        <button 
          onClick={handleClear}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 size={16} /> Limpar
        </button>
        <button 
          onClick={handleAdd}
          className="flex-1 bg-black hover:bg-gray-800 text-white py-2 rounded font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={16} /> Adicionar
        </button>
      </div>
    </div>
  );
};

export default SidebarForm;