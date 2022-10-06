import React from "react";
import Article from "../article";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { IArticle } from "../article/types";

interface Props {
  articles: IArticle[];
}

const ArticleList = ({ articles }: Props) => {
  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => (
        <Grid key={String(index)} xs={12} lg={6}>
          <Article
            src={article.src}
            title={article.title}
            description={article.description}
          />
        </Grid>
      ))}
      <Grid xs={12} display="flex" justifyContent="center">
        <Button variant="contained">Load more</Button>
      </Grid>
    </Grid>
  );
};

export default ArticleList;
