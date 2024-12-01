import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { route } from "./routes/index.routes";
import Loading from "../../Meupet/src/components/loading/loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); 
  }, []);

  return (
    <>
      <GlobalStyles />
      {loading && <Loading />} 
      <RouterProvider router={route} />
    </>
  );
}

export default App;
