import * as React from "react";
import { css } from "emotion";

const scales = {
  small: {
    padding: `5px 10px`,
    fontSize: 14
  },
  normal: {
    padding: `10px 20px`,
    fontSize: 16
  },
  big: {
    padding: `20px 30px`,
    fontSize: 18
  }
};

const kind = (outline: boolean) => (bg: string, color: string) => {
  const boxShadowColor = outline ? bg : "transparent";
  const backgroundColor = outline ? "transparent" : bg;

  return {
    background: backgroundColor,
    boxshadow: `inset 0 0 0 1px ${boxShadowColor}`,
    color: `${outline ? bg : color}`,
    transition: "all .3s",
    "&:hover": {
      boxShadow: `inset 0 0 0 1000px ${boxShadowColor}`,
      color
    }
  };
};

type Kind = "primary" | "secondary" | "cancel" | "dark" | "gray";
type Kinds = Record<Kind, any>;

const kinds = (outline: boolean): Kinds => {
  const get = kind(outline);

  return {
    primary: get("#1FB6FF", "white"),
    secondary: get("#5352ED", "white"),
    cancel: get("#FF4949", "white"),
    dark: get("#273444", "white"),
    gray: get("#8492A6", "white")
  };
};

export interface ButtonProps {
  scale?: "small" | "normal" | "big";
  kind: "primary" | "secondary" | "cancel" | "dark" | "gray";
  outline: boolean;
  onClick: React.MouseEventHandler;
}

const buttonStyle = css`
  cursor: pointer;
  margin: 3px 5px;
  border: none;
  border-radius: 3px;
`;

export const Button: React.SFC<ButtonProps> = ({
  children,
  onClick,
  scale,
  kind,
  outline
}) => {
  return (
    <button
      className={buttonStyle}
      style={{
        ...kinds(outline)[kind],
        ...scales[scale]
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
