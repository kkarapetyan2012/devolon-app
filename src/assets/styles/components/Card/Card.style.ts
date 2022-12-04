import styled from "styled-components";
import { theme } from "src/constants/variables";
import breakpoints from "src/constants/breakpoints";

export const CardStyle = styled.li`
  &.img-item {
    width: calc(100% / 4);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    padding: 16px;
  } 
  &.img-item img {
    max-height: 100%;
    width: auto
  } 
`;
