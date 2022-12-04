import styled from "styled-components";
import { theme } from "src/constants/variables";
import breakpoints from "src/constants/breakpoints";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  background: ${theme.secondaryColor};
  button {
    margin-left: auto;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .lg-button {
    display: none;
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    .lg-button {
      display: inline-flex;
    }
  }
`;