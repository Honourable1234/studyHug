
"use client";

import React, { createContext, useState, useContext } from "react";

const LoadingContext = createContext();


export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading, setUser, user }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
      throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
  };
