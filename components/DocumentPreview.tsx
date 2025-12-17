import React, { useMemo } from 'react';
import { CaseData, Person } from '../types';
import { Bold, Italic, Underline, Link, Paperclip, List, ListOrdered, MoreHorizontal, Copy, Zap } from 'lucide-react';

interface DocumentPreviewProps {
  caseData: CaseData;
  people: Person[];
  onReset: () => void;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ caseData, people, onReset }) => {
  
  // Logic to format date from YYYY-MM-DD to DD/MM/YYYY
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const generatedContent = useMemo(() => {
    const listItems = people.map(p => {
        const parts = [
            `<b>Nome</b>: ${p.nome || ''} - (Fls. ${p.folha || ''})`,
            `<b>Nacionalidade:</b> ${p.nacionalidade || ''}`,
            `<b>CPF:</b> ${p.cpf || ''}`,
            `<b>RG:</b> ${p.rg || ''}`,
            `<b>Pai:</b> ${p.pai || ''}`,
            `<b>Mãe:</b> ${p.mae || ''}`,
            `<b>Data de Nascimento:</b> ${formatDate(p.dataNascimento)}`
        ].map(part => `<li>${part}</li>`).join('');
        
        return `${parts}<br>`; 
    }).join('');

    return `
      <p class="mb-4">Pesquisa - Autos - ${caseData.numeroProcesso}</p>
      
      <p class="mb-4">Prezados,</p>
      
      <p class="mb-4">
        A pedido do(a). Dr.(a) ${caseData.promotor}, ${caseData.cargo || 'Promotor(a) de Justiça'}, solicito a localização de:
      </p>
      
      <ul class="list-none pl-0 mb-4 space-y-1">
        ${listItems}
      </ul>
      
      <p>Atenciosamente,</p>
    `;
  }, [caseData, people]);

  const handleCopy = () => {
    // Create a temporary element to copy HTML properly formatted as text/html for word processors if needed
    // For simple clipboard text:
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = generatedContent;
    const text = tempDiv.innerText;
    
    // For clipboard API allowing rich text
    const blob = new Blob([generatedContent], { type: 'text/html' });
    const textBlob = new Blob([tempDiv.innerText], { type: 'text/plain' });
    
    // Basic fallback copy
    navigator.clipboard.write([
        new ClipboardItem({
            'text/html': blob,
            'text/plain': textBlob,
        })
    ]).then(() => alert('Conteúdo copiado para a área de transferência!'))
      .catch(() => alert('Erro ao copiar.'));
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden">
      {/* Title Bar */}
      <div className="bg-gray-300 py-1 text-center border-b border-gray-400">
        <h3 className="font-semibold text-gray-800 uppercase text-sm">Parte</h3>
      </div>

      {/* Editor Toolbar */}
      <div className="bg-white border-b border-gray-200 p-2 flex items-center gap-3 text-gray-600">
        <div className="flex items-center gap-1 text-xs font-medium cursor-pointer hover:bg-gray-100 p-1 rounded">
          Formatação <span className="ml-1">▼</span>
        </div>
        <div className="w-px h-5 bg-gray-300 mx-1"></div>
        <button className="hover:bg-gray-100 p-1 rounded"><Bold size={16} /></button>
        <button className="hover:bg-gray-100 p-1 rounded"><Italic size={16} /></button>
        <button className="hover:bg-gray-100 p-1 rounded"><Underline size={16} /></button>
        <div className="w-px h-5 bg-gray-300 mx-1"></div>
        <button className="hover:bg-gray-100 p-1 rounded"><Link size={16} /></button>
        <button className="hover:bg-gray-100 p-1 rounded"><Paperclip size={16} /></button>
        <div className="w-px h-5 bg-gray-300 mx-1"></div>
        <button className="hover:bg-gray-100 p-1 rounded"><List size={16} /></button>
        <button className="hover:bg-gray-100 p-1 rounded"><ListOrdered size={16} /></button>
        <div className="w-px h-5 bg-gray-300 mx-1"></div>
        <button className="hover:bg-gray-100 p-1 rounded"><MoreHorizontal size={16} /></button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto bg-white">
        <div 
          className="prose prose-sm max-w-none text-gray-800 font-sans leading-relaxed"
          dangerouslySetInnerHTML={{ __html: generatedContent }}
        />
      </div>

      {/* Footer Actions */}
      <div className="bg-gray-200 p-4 border-t border-gray-300 flex justify-end gap-3">
        <button 
             onClick={handleCopy}
             className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow flex items-center gap-2"
        >
            <Copy size={16} /> Copiar Texto
        </button>
        <button 
            onClick={onReset}
            className="bg-[#0c3b5e] hover:bg-[#1a3f61] text-white px-6 py-2 rounded shadow flex items-center gap-2 font-semibold"
        >
          <Zap size={16} className="text-white" fill="currentColor" /> ⚡Novo
        </button>
      </div>
    </div>
  );
};

export default DocumentPreview;