import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Img, WrapperBannerInfo } from "./style";
import Categories from "../../components/categories";
import ArticleList from "../../components/article-list";
import { ARTICLES } from "../../utils/constants";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Header />
      <Container maxWidth="xl">
        <Grid container gap={3}>
          <Grid xs={12} container>
            <Grid xs={12} lg={6}>
              <WrapperBannerInfo>
                <Typography variant="h2" fontWeight="bold">
                  Showcase your thought provoking topics and ideas
                </Typography>
                <Typography variant="h4">
                  Big company annoucement or simple sub-header taking two or
                  more lines.
                </Typography>
                <Button variant="contained">Read more</Button>
              </WrapperBannerInfo>
            </Grid>
            <Grid xs={12} lg={6}>
              <Img
                src="https://via.placeholder.com/800"
                alt="cover left side image"
              />
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Categories
              categoriesList={["Marketing", "Design", "Engineering"]}
            />
          </Grid>
          <ArticleList articles={ARTICLES} />
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
