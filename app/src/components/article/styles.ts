import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  max-width: 100%;
`;

export const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: 1.8rem;
`;

export const ButtonStyled = styled(Button)`
  width: 120px;
`;
