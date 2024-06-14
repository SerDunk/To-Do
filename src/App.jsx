import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/todo" element={<ToDoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
