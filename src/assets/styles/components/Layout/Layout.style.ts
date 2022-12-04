import styled from "styled-components";
import { theme } from "src/constants/variables";
import breakpoints from "src/constants/breakpoints";


export const LayoutStyle = styled.div`
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .sidebar-visible {
        left: 0;
        position: absolute;
        transition: all .3s ease;
        transform: translateX(0);
        z-index: 2;
    }
    .sidebar-hidden {
        position: absolute;
        left: -320px;
        transform: translateX(-320px);
        z-index: 2;
    }
  }
`;