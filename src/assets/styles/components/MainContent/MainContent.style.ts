import styled from "styled-components";
import breakpoints from "src/constants/breakpoints";

type TMainContentType = {
  isVisible?: boolean
}

export const MainContentStyle = styled.div<TMainContentType>`
  width: 100%;
  transition: .5s;
  padding: 0 20px;
  max-width: ${({ isVisible }) => (!isVisible ? "calc(100% - 220px)" : "100%")};
  padding-bottom: 48px;
  button {
    margin-top: 16px
  }
  @media screen and (max-width: ${breakpoints.screenMD}) {
    margin-left: ${({ isVisible }) => (!isVisible ? "220px" : "0")};
  }
`;
