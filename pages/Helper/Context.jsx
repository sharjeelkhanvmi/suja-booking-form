import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const PostalProvider = ({ children }) => {
  const [postal, setPostal] = useState(1234);

  return (
    <MyContext.Provider value={postal}>
      {children}
    </MyContext.Provider>
  );
};
