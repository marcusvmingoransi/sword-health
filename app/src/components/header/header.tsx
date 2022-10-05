import React from "react";
import { Box, Container } from "@mui/material";
import { Wrapper, LinksWrapper, LinkStyled, Img } from "./styles";
const Header = () => {
  return (
    <Box component="header">
      <Container maxWidth="xl">
        <Wrapper>
          <Img src="https://via.placeholder.com/150" alt="" />
          <LinksWrapper>
            <LinkStyled href="#">My Bookmarks</LinkStyled>
            <LinkStyled href="#">My Account</LinkStyled>
          </LinksWrapper>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default Header;
