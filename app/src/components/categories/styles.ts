import styled from "@emotion/styled";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Tittle = styled(Typography)`
  font-size: 2rem;
  font-weight: semi-bold;
  margin-right: 40px;
`;

export const ToggleButtonGroupStyled = styled(ToggleButtonGroup)`
  gap: 10px;
`;

export const ToggleButtonStyled = styled(ToggleButton)`
  border-radius: 30px !important;
  border: 1px solid rgba(0, 0, 0, 0.12) !important;
  text-transform: capitalize;
`;
