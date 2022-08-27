import React, { MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";
import Loader from "../Loader";
interface TButton {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  isLoading?: boolean;
  children: ReactElement | string;
  borderRadius?: string;
  fontWeight?: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function Button({
  width = "100px",
  height = "40px",
  backgroundColor = "blue",
  color = "white",
  fontSize = 16,
  isLoading,
  children,
  borderRadius = "4px",
  fontWeight = 500,
  onClick,
}: TButton) {
  return (
    <SButton
      {...{
        width,
        height,
        backgroundColor,
        color,
        fontSize,
        isLoading,
        borderRadius,
        fontWeight,
      }}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </SButton>
  );
}

const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0%;
  width: ${(props: TButton) => props?.width};
  height: ${(props: TButton) => props?.height};
  background-color: ${(props: TButton) => props?.backgroundColor};
  color: ${(props: TButton) => props?.color};
  font-weight: ${(props: TButton) => props?.fontWeight};
  font-size: ${(props: TButton) => props?.fontSize};
  border-radius: ${(props: TButton) => props?.borderRadius};
  cursor: ${(props: TButton) => (props?.isLoading ? "no-drop" : "pointer")}; ;
`;
