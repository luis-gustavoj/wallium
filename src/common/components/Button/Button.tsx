import type { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";

const BUTTON_SIZES = {
  small: {
    fontSize: "0.75rem",
    padding: "4px 6px",
    gap: "4px",
    iconSize: "16px",
  },
  medium: {
    fontSize: "1rem",
    padding: "12px 16px",
    gap: "8px",
    iconSize: "22px",
  },
};

const BUTTON_COLORS = {
  blue: "var(--color-blue-200)",
};

type ButtonProps = {
  size: "small" | "medium";
  color: keyof typeof BUTTON_COLORS;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size,
  color,
  fullWidth,
  children,
  iconLeft,
  ...props
}: ButtonProps) => {
  const { fontSize, padding, gap, iconSize } = BUTTON_SIZES[size];
  const backgroundColor = BUTTON_COLORS[color];

  return (
    <S.Button
      style={{
        "--font-size": fontSize,
        "--padding": padding,
        "--background-color": backgroundColor,
        "--width": fullWidth ? "100%" : "auto",
        "--gap": gap,
        "--icon-size": iconSize,
      }}
      {...props}
    >
      {iconLeft && iconLeft}
      {children}
    </S.Button>
  );
};

export const { UnstyledButton } = S;
