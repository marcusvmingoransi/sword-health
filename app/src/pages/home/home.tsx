import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Img, WrapperBannerInfo } from "./style";
import Categories from "../../components/categories";

const Home = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <WrapperBannerInfo>
          <Typography variant="h2" fontWeight="bold">
            Showcase your thought provoking topics and ideas
          </Typography>
          <Typography variant="h4">
            Big company annoucement or simple sub-header taking two or more
            lines.
          </Typography>
          <Button variant="contained">Read more</Button>
        </WrapperBannerInfo>
      </Grid>
      <Grid xs={6}>
        <Box>
          <Img
            src="https://via.placeholder.com/800"
            alt="cover left side image"
          />
        </Box>
      </Grid>
      <Categories categoriesList={["Marketing", "Design", "Engineering"]} />
    </Grid>
  );
};

export default Home;
