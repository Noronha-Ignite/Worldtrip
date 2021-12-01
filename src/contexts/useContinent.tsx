import { createContext, useContext } from 'react';
import { Continent } from '../continents';

interface ContinentContextProps {
  continent: Continent;
}

const continentContext = createContext({} as ContinentContextProps);

export const ContinentContextWrapper: React.FC<{ continent: Continent }> = ({
  children,
  continent,
}) => {
  return (
    <continentContext.Provider value={{ continent }}>{children}</continentContext.Provider>
  );
};

const useContinent = () => useContext(continentContext);

export default useContinent;
