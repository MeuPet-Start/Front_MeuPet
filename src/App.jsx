import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { route } from "./routes/index.routes";
import Loading from "../src/components/loading/loading";
import { UserDataContextProvider } from "./hooks/useUserData";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); 
  }, []);

  return (
    <UserDataContextProvider>
      <GlobalStyles />
      {loading && <Loading />} 
      <RouterProvider router={route} />
    </UserDataContextProvider>
  );
}

export default App;
