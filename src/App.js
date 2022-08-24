import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useAuthContext } from "./hooks/useAuthContext";

// Pages and Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <Login /> :  <Navigate to="/"/>} />
            <Route path="/signup" element={!user ? <Signup /> :  <Navigate to="/"/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
