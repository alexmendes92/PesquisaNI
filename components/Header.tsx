import React from 'react';
import { ChevronLeft, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0f2942] text-white h-16 flex items-center justify-between px-6 shadow-md shrink-0">
      <button className="p-2 rounded-full hover:bg-white/10 transition-colors border-2 border-white">
        <ChevronLeft size={24} />
      </button>
      
      <div className="flex items-center gap-2">
        <span className="font-medium">Alex Santana Mendes</span>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;