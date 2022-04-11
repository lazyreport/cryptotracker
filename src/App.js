import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import Box from "@mui/material/Box";
/* import { styled } from '@mui/material/styles'; */

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "#14161a", color: "#fff", minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
