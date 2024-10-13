import React, { createContext, useState} from 'react';

// Criando o contexto
export const MenuContext = createContext();

// Provider que envolverá os componentes que precisam do estado do menu
export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};


