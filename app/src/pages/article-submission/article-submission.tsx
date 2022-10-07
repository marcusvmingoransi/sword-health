import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Grid from "@mui/material/Unstable_Grid2";
import Footer from "../../components/footer";

const ArticleSubmission = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Header />
      <Container maxWidth="xl">
        <Grid container gap={3}>
          TEste
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default ArticleSubmission;
