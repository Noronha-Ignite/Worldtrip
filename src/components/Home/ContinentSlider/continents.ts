export type Continent = {
  name: string;
  description: string;
  background: string;
};

export const continents: Continent[] = [
  {
    name: 'Europa',
    description: 'O continente mais antigo.',
    background: 'images/europe/main.png',
  },
  {
    name: 'América do Sul',
    description: 'O continente mais natural.',
    background: 'images/south-america/main.png',
  },
  {
    name: 'América do Norte',
    description: 'A definição do primeiro mundo.',
    background: 'images/north-america/main.png',
  },
  {
    name: 'Ásia',
    description: 'O maior continente.',
    background: 'images/asia/main.png',
  },
  {
    name: 'África',
    description: 'O continente que os humanos nasceram.',
    background: 'images/africa/main.png',
  },
  {
    name: 'Oceânia',
    description: 'O continente mais novo.',
    background: 'images/oceania/main.png',
  },
];