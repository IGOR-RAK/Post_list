import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading
      }}
    >
      <Router>
        {isAuth && <Navbar />}
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}
