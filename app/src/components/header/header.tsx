import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Wrapper, LinksWrapper, Img } from "./styles";
import Link from "../link";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="header">
      <Wrapper>
        <Img src="https://via.placeholder.com/150" alt="" />
        <LinksWrapper>
          <Link to="/Home">Home</Link>
          <Link to="/bookmark">My Bookmarks</Link>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            My Account
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/article-submission">Article Submission</Link>
            </MenuItem>
          </Menu>
        </LinksWrapper>
      </Wrapper>
    </Box>
  );
};

export default Header;
