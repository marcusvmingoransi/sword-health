import React from "react";
import { Box } from "@mui/material";
import { Wrapper, LinksWrapper, LinkStyled, Img } from "./styles";
const Header = () => {
  return (
    <Box component="header">
      <Wrapper>
        <Img src="https://via.placeholder.com/150" alt="" />
        <LinksWrapper>
          <LinkStyled href="#">My Bookmarks</LinkStyled>
          <LinkStyled href="#">My Account</LinkStyled>
        </LinksWrapper>
      </Wrapper>
    </Box>
  );
};

export default Header;
