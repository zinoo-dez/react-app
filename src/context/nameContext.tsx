
import React, { createContext, useContext, useState, type ReactNode } from 'react';
interface NameContextType {
     name: string;
     setName: (name: string) => void;
}
// to use-case
const NameContext = createContext<NameContextType | null>(null);
interface NameProviderProps {
     children: ReactNode;
}
// provider go to global state
export const NameProvider: React.FC<NameProviderProps> = ({ children }) => {
     const [name, setName] = useState<string>('popo');
     return (
          <NameContext.Provider value={{ name, setName }}>
               {children}
          </NameContext.Provider>
     );
};
//custom hook (use)
export const useName = () => {
     const context = useContext(NameContext);
     if (!context) {
          throw new Error('useName must be used within a NameProvider');
     }
     return context;
};

// const { name, setName } = useName(); any page can use it