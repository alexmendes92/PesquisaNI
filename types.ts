export interface Person {
  id: string;
  nome: string;
  folha: string;
  nacionalidade: string;
  cpf: string;
  rg: string;
  pai: string;
  mae: string;
  dataNascimento: string;
}

export interface CaseData {
  numeroProcesso: string;
  cargo: string;
  promotor: string;
  dataAudiencia: string;
}

interface Schedule {
  name: string;
  start: number;
  end: number;
}

export interface PromotoriaDef {
  label: string;
  schedule: Schedule[];
}

export const PROMOTORIAS: PromotoriaDef[] = [
  { 
    label: "61º Promotor de Justiça Criminal", 
    schedule: [
      { name: "Marco Thulio Goncalves", start: 1, end: 10 },
      { name: "Victor Montanes Rston", start: 11, end: 15 },
      { name: "Pedro Henrique Pavanelli Lima", start: 16, end: 31 }
    ]
  },
  { 
    label: "62º Promotor de Justiça Criminal", 
    schedule: [{ name: "Pedro Henrique da Silva Rosa", start: 1, end: 31 }]
  },
  { 
    label: "63º Promotor de Justiça Criminal", 
    schedule: [{ name: "Michaela Carli Gomes", start: 1, end: 31 }]
  },
  { 
    label: "64º Promotor de Justiça Criminal", 
    schedule: [{ name: "Tânia Serra Azul Guimaraes Biazolli", start: 1, end: 31 }]
  },
  { 
    label: "65º Promotor de Justiça Criminal", 
    schedule: [{ name: "Paulo Henrique Castex", start: 1, end: 31 }]
  },
  { 
    label: "66º Promotor de Justiça Criminal", 
    schedule: [{ name: "Martha de Camargo Duarte Dias", start: 1, end: 31 }]
  },
  { 
    label: "67º Promotor de Justiça Criminal", 
    schedule: [
      { name: "Camila Perez Yeda Moreira dos Santos", start: 1, end: 4 },
      { name: "Maria Carolina Pera Joao Moreira Viegas", start: 5, end: 9 },
      { name: "Solange Aparecida Cruz", start: 10, end: 15 },
      { name: "Guilherme Carvalho da Silva", start: 16, end: 31 }
    ]
  },
  { 
    label: "68º Promotor de Justiça Criminal", 
    schedule: [{ name: "Beatriz Lotufo Oliveira", start: 1, end: 31 }]
  },
  { 
    label: "69º Promotor de Justiça Criminal", 
    schedule: [{ name: "Adriana Ribeiro Soares de Morais", start: 1, end: 31 }]
  },
  { 
    label: "70º Promotor de Justiça Criminal", 
    schedule: [
      { name: "Camila Perez Yeda Moreira dos Santos", start: 1, end: 4 },
      { name: "Marina Agapito Soares", start: 5, end: 9 },
      { name: "Fabiano Augusto Petean", start: 10, end: 15 },
      { name: "Caio Augusto Ciraulo", start: 16, end: 31 }
    ]
  },
  { 
    label: "71º Promotor de Justiça Criminal", 
    schedule: [{ name: "Lucas Koga Genovez", start: 1, end: 19 }]
  },
  { 
    label: "72º Promotor de Justiça Criminal", 
    schedule: [{ name: "Pedro Henrique da Silva Rosa", start: 1, end: 31 }]
  },
  { 
    label: "73º Promotor de Justiça Criminal", 
    schedule: [{ name: "Daniel Fontana", start: 1, end: 31 }]
  },
  { 
    label: "74º Promotor de Justiça Criminal", 
    schedule: [{ name: "Pedro de Andrade Khouri Santos", start: 1, end: 31 }]
  },
  { 
    label: "75º Promotor de Justiça Criminal", 
    schedule: [{ name: "Fernanda Queiroz Karan Franco", start: 1, end: 31 }]
  },
  { 
    label: "76º Promotor de Justiça Criminal", 
    schedule: [{ name: "Beatriz Lotufo Oliveira", start: 1, end: 19 }]
  },
  { 
    label: "77º Promotor de Justiça Criminal", 
    schedule: [{ name: "Solange Aparecida Cruz", start: 1, end: 31 }]
  },
  { 
    label: "78º Promotor de Justiça Criminal", 
    schedule: [{ name: "Claudio Henrique Bastos Giannini", start: 1, end: 31 }]
  },
  { 
    label: "79º Promotor de Justiça Criminal", 
    schedule: [{ name: "Margareth Ferraz França", start: 1, end: 31 }]
  },
  { 
    label: "80º Promotor de Justiça Criminal", 
    schedule: [{ name: "Tais Servilha Ferrari", start: 1, end: 31 }]
  },
];
