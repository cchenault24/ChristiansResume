import { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

// Custom hook to consume the context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
  };