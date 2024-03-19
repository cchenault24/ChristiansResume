import React, { createContext, useState, ReactNode } from 'react';
import { Pages } from '../model/enum';

// Define the type for the context value
export type AppContextType = {
  activePage: Pages;
  setActivePage: React.Dispatch<React.SetStateAction<Pages>>;
};

// Create a context for your variable
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<Pages>(Pages.HOME);

  return (
    <AppContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
};
