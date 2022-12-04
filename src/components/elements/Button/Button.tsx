import React, { FC } from "react";
import { ButtonStyle } from "src/assets/styles/components/elements/Button/Button.style";


type BtnRef = HTMLButtonElement;

export type ButtonsProps = {
  type: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<BtnRef>;
  variant: "primary" | "secondary" | "light" | "outlined";
  children: React.ReactNode;
};

const Button: FC<ButtonsProps> = ({
  type,
  className = "",
  disabled,
  onClick,
  variant,
  children,
}) => {
  return (
    <ButtonStyle
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
