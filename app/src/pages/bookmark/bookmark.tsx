import React from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Grid from "@mui/material/Unstable_Grid2";
import Footer from "../../components/footer";

const Bookmark = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Header />
      <Container maxWidth="xl">
        <Grid container gap={3}>
          <Link to="/article-submission">Article Submission</Link>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Bookmark;
