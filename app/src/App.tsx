import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Header />
      <Container maxWidth="xl">
        <Home />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
