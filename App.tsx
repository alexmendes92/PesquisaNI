import React, { useState } from 'react';
import Header from './components/Header';
import SidebarForm from './components/SidebarForm';
import CaseInfoBar from './components/CaseInfoBar';
import DocumentPreview from './components/DocumentPreview';
import { Person, CaseData } from './types';

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [caseData, setCaseData] = useState<CaseData>({
    numeroProcesso: '',
    cargo: '',
    promotor: '',
    dataAudiencia: ''
  });

  const handleAddPerson = (person: Person) => {
    setPeople(prev => [...prev, person]);
  };

  const handleResetAll = () => {
    if (confirm("Tem certeza que deseja limpar todos os dados do processo atual?")) {
        setPeople([]);
        setCaseData({
            numeroProcesso: '',
            cargo: '',
            promotor: '',
            dataAudiencia: ''
        });
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-100">
      <Header />
      
      <main className="flex flex-1 overflow-hidden p-6 gap-6 max-w-[1600px] mx-auto w-full">
        {/* Left Sidebar */}
        <div className="flex-shrink-0 h-full">
           <SidebarForm onAddPerson={handleAddPerson} />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-0 h-full min-w-0">
          <CaseInfoBar caseData={caseData} setCaseData={setCaseData} />
          
          <div className="flex-1 bg-gray-300/50 p-4 border border-gray-300 border-t-0 shadow-sm overflow-hidden">
             <DocumentPreview 
                caseData={caseData} 
                people={people} 
                onReset={handleResetAll}
             />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;