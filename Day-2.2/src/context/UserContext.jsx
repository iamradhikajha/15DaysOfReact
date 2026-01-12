import React, { createContext } from "react";
export const DataContext = createContext();

const userContext = ({ children }) => {
  const userName = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    city: " New York",
    phoneNO: "123-456-7890",
  };

  return (
    <div>
      <DataContext.Provider value={userName}>{children} </DataContext.Provider>
    </div>
  );
};

export default userContext;
