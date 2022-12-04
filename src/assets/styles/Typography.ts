import { createGlobalStyle } from "styled-components";
import breakpoints from "src/constants/breakpoints";
import { fonts, fontsMobile, theme } from "src/constants/variables";

const Typography = createGlobalStyle`

  h1, .h1 {
    font-size: ${fonts.textXl};
    font-weight: ${theme.fontWeight};
    line-height: 1.3;
  }

  h2, .h2 {
    font-size: ${fonts.textLg};
    font-weight: ${theme.fontWeight};
    line-height: 1.3;
  }

  h3, .h3 {
    font-size: ${fonts.textMd};
    font-weight: ${theme.fontWeight};
  }

  h4, h5 {
    font-weight: ${theme.fontWeight};
  }

  .body1 {
    font-size: ${fonts.textBody1};
  }

  .body2 {
    font-size: ${fonts.textBody2};
  }

  @media screen and (max-width: ${breakpoints.screenMD}) {
    h1, .h1 {
      font-size: ${fontsMobile.textXl};
    }

    h2, .h2 {
      font-size: ${fontsMobile.textLg};
    }

    h3, .h3 {
      font-size: ${fontsMobile.textMd};
    }

    .body1 {
      font-size: ${fontsMobile.textBody1};
    }

  }
`;

export default Typography;
