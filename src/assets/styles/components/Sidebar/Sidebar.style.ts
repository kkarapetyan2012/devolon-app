import styled from "styled-components";
import { theme } from "src/constants/variables";

export const SidebarStyle = styled.div`
  width: 100%;
  max-width: 220px;
  transition: .5s;
  background: ${theme.secondaryColor};
  border-top: 1px solid ${theme.lightColor};
  ul {
    li {
      padding: 0 4px 1px;
    }
  }
`;
