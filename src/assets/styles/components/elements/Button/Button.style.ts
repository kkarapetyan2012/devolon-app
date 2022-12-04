import styled from "styled-components";
import { theme } from "src/constants/variables";
import { ButtonsProps } from "src/components/elements/Button/Button";

const getVariant = (props: ButtonsProps) => {
  const mapping = {
    primary: {
      backgroundColor: theme.primaryColor,
      color: theme.lightColor,
      border: theme.secondaryColor,

      backgroundColorHover: theme.primaryHoverColor,
      colorHover: theme.lightColor,
      borderHover: theme.secondaryColor
    },
    secondary: {
      color: theme.lightColor,
      backgroundColor: theme.secondaryColor,
      border: theme.secondaryColor,

      colorHover: theme.secondaryColor,
      backgroundColorHover: theme.lightColor,
      borderHover: theme.secondaryColor
    },
    light: {
      backgroundColor: theme.lightColor,
      color: theme.darkColor,
      border: theme.secondaryColor,

      backgroundColorHover: theme.darkBlue,
      colorHover: theme.lightColor,
      borderHover: theme.secondaryColor
    },
    outlined: {
      backgroundColor: theme.lightColor,
      color: theme.secondaryColor,
      border: theme.secondaryColor,

      backgroundColorHover: theme.secondaryColor,
      colorHover: theme.lightColor,
      borderHover: theme.secondaryColor
    },
  };
  return mapping[props.variant];
};

export const ButtonStyle = styled.button<any>`
  border: 1px solid ${(props) => getVariant(props).border};
  cursor: pointer;
  transition: 0.3s;
  padding: 12px 16px;
  color: ${(props) => getVariant(props).color};
  background-color: ${(props) => getVariant(props).backgroundColor};
  &:not(.no-hover) {
    &:hover {
      background-color: ${(props) => getVariant(props).backgroundColorHover};
      color: ${(props) => getVariant(props).colorHover};
      border: 1px solid ${(props) => getVariant(props).borderHover};
    }
  }

  &.disabled,
  &[disabled] {
    background-color: #a3a3ff;
    pointer-events: none;
    user-select: none;
  }
`;
