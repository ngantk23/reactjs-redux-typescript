import styled, { keyframes } from "styled-components";
export default function Loader(props: TLoader) {
  return <SLoader {...props}></SLoader>;
}

type TLoader = {
  size?: string;
  border?: string;
  color?: string;
  backgroundBorder?: string;
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const SLoader = styled.div`
  border: ${(props: TLoader) => props?.border || "3px"} solid
    ${(props: TLoader) => props?.backgroundBorder || "#f3f3f3"};
  border-radius: 50%;
  border-top: ${(props: TLoader) => props?.border || "3px"} solid
    ${(props: TLoader) => props?.color || "#3498db"};
  width: ${(props: TLoader) => props?.size || "20px"};
  height: ${(props: TLoader) => props?.size || "20px"};
  -webkit-animation: ${spin} 0.5s linear infinite; /* Safari */
  animation: ${spin} 0.5s linear infinite;
`;
