import { useState, React, createContext, useContext } from "react";

export const MyContext = createContext("");

export const AppWrapper = ({ children }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>{children}</MyContext.Provider>
    </div>
  );
};

export const useTextContext = () => useContext(MyContext);
