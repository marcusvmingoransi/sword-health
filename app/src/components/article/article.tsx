import React from "react";
import { Box } from "@mui/material";
import { ButtonStyled, Image, Text, Title } from "./styles";
import { IArticle } from "./types";

const Article = ({ src, title, description }: IArticle) => {
  return (
    <Box display="flex" gap={2}>
      <Image src={src} alt="article image" />
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Title>{title}</Title>
        <Text>{description}</Text>
        <ButtonStyled fullWidth={false} variant="contained">
          Read
        </ButtonStyled>
      </Box>
    </Box>
  );
};

export default Article;
