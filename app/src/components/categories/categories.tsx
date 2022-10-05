import React from "react";
import {
  Tittle,
  ToggleButtonGroupStyled,
  ToggleButtonStyled,
  Wrapper,
} from "./styles";

interface Props {
  categoriesList: string[];
}

const Categories = ({ categoriesList }: Props) => {
  const [formats, setFormats] = React.useState(() => [
    "marketing",
    "design",
    "engineering",
  ]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <Wrapper>
      <Tittle>Categories</Tittle>
      <ToggleButtonGroupStyled
        value={formats}
        onChange={handleFormat}
        aria-label="group of categories buttons"
      >
        {categoriesList.map((category, index) => (
          <ToggleButtonStyled
            key={String(index)}
            value={category}
            aria-label={category}
          >
            {category}
          </ToggleButtonStyled>
        ))}
      </ToggleButtonGroupStyled>
    </Wrapper>
  );
};

export default Categories;
