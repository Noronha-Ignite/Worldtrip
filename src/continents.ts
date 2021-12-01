type City = {
  name: string;
  country: string;
  countryCode: string;
  imgKey: string;
};

export type Continent = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  description: string;
  background: string;
  counts: {
    countries: number;
    languages: number;
    denseCities: number;
  };
  denseCities: City[];
};

export const continents: Continent[] = [
  {
    id: 1,
    name: 'europe',
    label: 'Europa',
    description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    shortDescription: 'O continente mais antigo.',
    background: 'images/europe/main.png',
    counts: {
      countries: 43,
      languages: 234,
      denseCities: 32,
    },
    denseCities: [
      { name: 'Londres', country: 'Reino Unido', countryCode: 'GB', imgKey: 'londres' },
      { name: 'Paris', country: 'França', countryCode: 'FR', imgKey: 'paris' },
      { name: 'Roma', country: 'Itália', countryCode: 'IT', imgKey: 'rome' },
      { name: 'Praga', country: 'República Tcheca', countryCode: 'CZ', imgKey: 'praga' },
      { name: 'Amsterdã', country: 'Holanda', countryCode: 'NL', imgKey: 'amsterda' },
    ],
  },
  {
    id: 2,
    name: 'south-america',
    label: 'América do Sul',
    description: 'O continente mais antigo.',
    shortDescription: 'O continente mais natural.',
    background: 'images/south-america/main.png',
    counts: {
      countries: 13,
      languages: 661,
      denseCities: 6,
    },
    denseCities: [
      { name: 'Rio de Janeiro', country: 'Brasil', countryCode: 'BR', imgKey: 'riodejaneiro' },
      { name: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', imgKey: 'buenosaires' },
      { name: 'Montevideo', country: 'Uruguai', countryCode: 'UY', imgKey: 'montevideo' },
    ],
  },
  {
    id: 3,
    name: 'north-america',
    label: 'América do Norte',
    description: 'O continente mais antigo.',
    shortDescription: 'A definição do primeiro mundo.',
    background: 'images/north-america/main.png',
    counts: {
      countries: 4,
      languages: 332,
      denseCities: 18,
    },
    denseCities: [
      { name: 'Nova york', country: 'Estados Unidos', countryCode: 'US', imgKey: 'newyork' },
      { name: 'México City', country: 'México', countryCode: 'MX', imgKey: 'mexicocity' },
      { name: 'Toronto', country: 'Canadá', countryCode: 'CA', imgKey: 'toronto' },
      { name: 'Los Angeles', country: 'Estados Unidos', countryCode: 'US', imgKey: 'losangeles' },
    ],
  },
  {
    id: 4,
    name: 'asia',
    label: 'Ásia',
    description: 'O continente mais antigo.',
    shortDescription: 'O maior continente.',
    background: 'images/asia/main.png',
    counts: {
      countries: 47,
      languages: 2322,
      denseCities: 57,
    },
    denseCities: [
      { name: 'Pequim', country: 'China', countryCode: 'CN', imgKey: 'pequim' },
      { name: 'Tokyo', country: 'Japão', countryCode: 'JP', imgKey: 'tokyo' },
      { name: 'Moscou', country: 'Rússia', countryCode: 'RU', imgKey: 'moscou' },
    ],
  },
  {
    id: 5,
    name: 'africa',
    label: 'África',
    description: 'O continente mais antigo.',
    shortDescription: 'O continente que os humanos nasceram.',
    background: 'images/africa/main.png',
    counts: {
      countries: 54,
      languages: 2110,
      denseCities: 9,
    },
    denseCities: [
      { name: 'Cairo', country: 'Egito', countryCode: 'EG', imgKey: 'cairo' },
      { name: 'Lagos', country: 'Nigéria', countryCode: 'NG', imgKey: 'lagos' },
    ],
  },
  {
    id: 6,
    name: 'oceania',
    label: 'Oceânia',
    description: 'O continente mais antigo.',
    shortDescription: 'O continente mais novo.',
    background: 'images/oceania/main.png',
    counts: {
      countries: 14,
      languages: 1250,
      denseCities: 4,
    },
    denseCities: [
      { name: 'Sydney', country: 'Australia', countryCode: 'AU', imgKey: 'sydney' },
    ],
  },
];

export const getContinentById = (id: number) => {
  return continents.find((continent) => continent.id === id);
};
