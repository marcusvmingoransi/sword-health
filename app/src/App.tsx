import React from "react";
import { Container } from "@mui/material";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Home />
    </Container>
  );
}

export default App;
