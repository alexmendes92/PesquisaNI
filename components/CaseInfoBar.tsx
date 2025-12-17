import React, { useEffect, useCallback } from 'react';
import { CaseData, PROMOTORIAS } from '../types';
import { Search } from 'lucide-react';

interface CaseInfoBarProps {
  caseData: CaseData;
  setCaseData: React.Dispatch<React.SetStateAction<CaseData>>;
}

const CaseInfoBar: React.FC<CaseInfoBarProps> = ({ caseData, setCaseData }) => {
  
  const getPromotorForDate = useCallback((cargoLabel: string, dateString: string) => {
    const promotoria = PROMOTORIAS.find(p => p.label === cargoLabel);
    if (!promotoria) return "";

    // If no date is selected, return all names separated by " / "
    if (!dateString) {
      const allNames = Array.from(new Set(promotoria.schedule.map(s => s.name))); // Unique names
      return allNames.join(" / ");
    }

    // Parse date (YYYY-MM-DD)
    const [year, month, day] = dateString.split('-').map(Number);
    
    // Find schedule entry
    const entry = promotoria.schedule.find(s => day >= s.start && day <= s.end);
    
    return entry ? entry.name : ""; // Return empty if date not in range (e.g. day 20 for cargo 71)
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setCaseData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Auto-update promotor when Cargo or Data changes
      if (name === 'cargo' || name === 'dataAudiencia') {
        // If updating cargo, use new cargo value and existing date
        // If updating data, use existing cargo and new date value
        const targetCargo = name === 'cargo' ? value : prev.cargo;
        const targetDate = name === 'dataAudiencia' ? value : prev.dataAudiencia;
        
        const newPromotor = getPromotorForDate(targetCargo, targetDate);
        
        // Only update promotor if we found logic for it (or if it should be cleared)
        // We auto-fill based on the table.
        if (targetCargo) {
             newData.promotor = newPromotor;
        }
      }
      
      return newData;
    });
  };

  const handleSearch = () => {
    if (!caseData.numeroProcesso) {
        alert("Por favor, insira o número do processo.");
        return;
    }
    const url = `https://esaj.tjsp.jus.br/cpopg/search.do?conversationId=&cbPesquisa=NUMPROC&numeroDigitoAnoUnificado=&foroNumeroUnificado=&dadosConsulta.valorConsultaNuUnificado=&dadosConsulta.valorConsultaNuUnificado=UNIFICADO&dadosConsulta.valorConsulta=${encodeURIComponent(caseData.numeroProcesso)}&dadosConsulta.tipoNuProcesso=SAJ`;
    window.open(url, '_blank');
  };

  const inputClass = "h-10 bg-gray-100 rounded px-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-full";

  return (
    <div className="bg-[#0f2942] p-4 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Process Number with Search Icon */}
        <div className="md:col-span-3 relative">
          <input
            type="text"
            name="numeroProcesso"
            placeholder="Número do Processo"
            value={caseData.numeroProcesso}
            onChange={handleChange}
            className={`${inputClass} pr-10`}
          />
          <button 
            onClick={handleSearch}
            className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors"
            title="Pesquisar Processo no ESAJ"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Cargo Dropdown */}
        <div className="md:col-span-3">
          <select
            name="cargo"
            value={caseData.cargo}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Selecione o Cargo</option>
            {PROMOTORIAS.map(p => (
              <option key={p.label} value={p.label}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Promotor Name */}
        <div className="md:col-span-3">
            <input
            type="text"
            name="promotor"
            placeholder="Nome do Promotor(a)"
            value={caseData.promotor}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Audience Date */}
        <div className="md:col-span-3">
           <input
            type="text" // Keep as text to match placeholder behavior of screenshot, or use date with placeholder logic
            onFocus={(e) => e.target.type = 'date'}
            onBlur={(e) => e.target.type = 'text'}
            name="dataAudiencia"
            placeholder="Data da Audiência"
            value={caseData.dataAudiencia}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

      </div>
    </div>
  );
};

export default CaseInfoBar;