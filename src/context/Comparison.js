// src/context/ComparisonContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [comparison, setComparison] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonFunction = (itemId) => {
    setComparison((prev) => {
      if (prev.includes(itemId)) return prev;
      if (prev.length < 2) return [...prev, itemId];
      return prev;
    });
  };

  useEffect(() => {
    if (comparison.length === 2) {
      setIsModalOpen(true);
    }
  }, [comparison]);

  const handleClose = () => {
    setIsModalOpen(false);
    setComparison([]);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparison,
        comparisonFunction,
        isModalOpen,
        handleClose,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => useContext(ComparisonContext);
